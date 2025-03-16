(ns workout-demo.db.schema
  (:require [workout-demo.db.seeder :refer [generate-workout-days]]
            [workout-demo.config :refer [get-config]]
            [vol1n.dynalog.api :as d])) 

(def config (delay (get-config)))

;; Determine environment
(def db-name "workout-demo")

;; Datomic Client setup
(defonce client (atom nil))
(defonce conn (atom nil))

(defn get-client []
  (when (nil? @client)
    (reset! client
            (d/client {:aws-region "us-east-1"}))) 
  @client)

(defn seed-users [conn]
  (let [db (d/db conn)
        existing-users (set (map first (d/q '[:find ?username
                                     :where [_ :user/username ?username]]
                                   db)))
          missing-users (remove #(contains? existing-users (name %)) (keys (:users @config)))]
      (when (seq missing-users)
        (d/transact conn {:tx-data (mapv (fn [u] {:user/username (name u)}) missing-users)}))))

(def user-schema
  [{:db/ident :user/username
    :db/valueType :db.type/string
    :db/unique :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident :user/last-login
    :db/valueType :db.type/instant
    :db/cardinality :db.cardinality/one}])

(def tracking-type-schema 
  [{:db/ident :workout.types/label
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}])

(def tracking-types 
  [{:db/ident :workout.exercise/weightxreps
    :workout.types/label "Weight x Reps"}
   {:db/ident :workout.exercise/time
    :workout.types/label "Time"}])

(def exercise-schema 
  [{:db/ident :workout.exercise/name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident :workout.exercise/tracking-type
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :workout.exercise/num-sets
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one}
   {:db/ident :workout.exercise/order
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one}])

(def template-schema 
  [{:db/ident :workout.template/user
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :workout.template/name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one},
   {:db/ident :workout.template/exercises
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many}
   {:db/ident :workout.template/symbol
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one}])

(def workout-set-schema
  [{:db/ident :workout.set/weight
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one}
   {:db/ident :workout.set/reps
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one}
   {:db/ident :workout.set/order
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one}])

(def workout-time-schema
  [{:db/ident :workout.time/time
    :db/valueType :db.type/float
    :db/cardinality :db.cardinality/one}])

(def workout-completed-exercise-schema
  [{:db/ident :workout.completed-exercise/sets
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many}
   {:db/ident :workout.completed-exercise/exercise
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}])

(def workout-schema
  [{:db/ident :workout/user
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one} 
   {:db/ident :workout/template
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident :workout/exercises
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many}
   {:db/ident :workout/timestamp
    :db/valueType :db.type/instant
    :db/cardinality :db.cardinality/one}])

(defn clear-demo-data [conn]
  (let [db (d/db conn)
        demo-user-id (ffirst (d/q '[:find ?u 
                                    :where [?u :user/username "demo"]]
                                  db))]
    (when demo-user-id
      (let [templates (d/q '[:find ?t
                             :in $ ?u
                             :where [?t :workout.template/user ?u]]
                           db demo-user-id)
            workouts (d/q '[:find ?w
                            :in $ ?u
                            :where [?w :workout/user ?u]]
                          db demo-user-id)
            exercises (d/q '[:find ?e
                             :in $ [?t ...]
                             :where [?t :workout.template/exercises ?e]]
                           db (map first templates))
            completed-exercises (d/q '[:find ?ce
                                       :in $ [?w ...]
                                       :where [?w :workout/exercises ?ce]]
                                     db (map first workouts))
            sets (d/q '[:find ?s
                        :in $ [?ce ...]
                        :where [?ce :workout.completed-exercise/sets ?s]]
                      db (map first completed-exercises))

        entities-to-delete (concat 
                                  (map first templates)
                                  (map first workouts)
                                  (map first exercises)
                                  (map first completed-exercises)
                                  (map first sets))]
          (when (seq entities-to-delete)
            (d/transact conn {:tx-data (mapv #(vector :db/retractEntity %) entities-to-delete)}))))))

(defn seed-templates []
  (let [;; Define temporary IDs for exercises
        bench-press-id "bench-press"
        pull-ups-id    "pull-ups"
        squats-id      "squats"
        lunges-id      "lunges"
        run-800-id     "run-800"

        ;; Define templates with references to exercise IDs
        upper-body-template-id "upper-body"
        lower-body-template-id "lower-body"
        run-template-id        "run"

        

        ;; Define exercises
        exercises [{:db/id bench-press-id
                    :workout.exercise/name "Bench Press"
                    :workout.exercise/num-sets 3
                    ;;:workout.exercise/unique-key ["Bench Press" upper-body-template-id]
                    :workout.exercise/tracking-type :workout.exercise/weightxreps
                    :workout.exercise/order 1}
                   {:db/id pull-ups-id
                    :workout.exercise/name "Pull-ups"
                    :workout.exercise/num-sets 3
                    ;;:workout.exercise/unique-key ["Pull-ups" upper-body-template-id]
                    :workout.exercise/tracking-type :workout.exercise/weightxreps
                    :workout.exercise/order 2}
                  {:db/id squats-id
                  :workout.exercise/name "Squats"
                  :workout.exercise/num-sets 3
                  ;;:workout.exercise/unique-key ["Squats" lower-body-template-id]
                  :workout.exercise/tracking-type :workout.exercise/weightxreps 
                   :workout.exercise/order 1}
                  {:db/id lunges-id
                  :workout.exercise/name "Lunges"
                  :workout.exercise/num-sets 2
                  ;;:workout.exercise/unique-key ["Lunges" lower-body-template-id]
                  :workout.exercise/tracking-type :workout.exercise/weightxreps
                   :workout.exercise/order 2}
                  {:db/id run-800-id
                  :workout.exercise/name "800m Run"
                  :workout.exercise/num-sets 4
                   ;;:workout.exercise/unique-key ["800m Run" run-template-id]
                   :workout.exercise/tracking-type :workout.exercise/time
                   :workout.exercise/order 1}]

        ;; Define templates with exercise references
        templates [{:db/id upper-body-template-id
                    :workout.template/user [:user/username "demo"]
                    :workout.template/name "Upper Body"
                    :workout.template/exercises [bench-press-id pull-ups-id]
                    :workout.template/symbol "💪"}
                  {:db/id lower-body-template-id
                    :workout.template/user [:user/username "demo"]
                    :workout.template/name "Lower Body"
                    :workout.template/exercises [squats-id lunges-id]
                    :workout.template/symbol "🏋️"}
                  {:db/id run-template-id
                   :workout.template/user [:user/username "demo"]
                  :workout.template/name "800m Repeats"
                  :workout.template/exercises [run-800-id]
                  :workout.template/symbol "🏃‍♂️"}]]
    (concat exercises templates)))

(defn setup-db [new-conn]
  (d/transact new-conn {:tx-data user-schema}
            (d/transact new-conn {:tx-data [{:db/ident :workout/type
                                             :db/valueType :db.type/ref
                                             :db/cardinality :db.cardinality/one
                                             :db/doc "The type of the workout"}
                                            {:db/ident :workout/exercises
                                             :db/valueType :db.type/ref
                                             :db/cardinality :db.cardinality/many
                                             :db/doc "The exercises of the workout"}]}))
   (d/transact new-conn {:tx-data exercise-schema})
   (d/transact new-conn {:tx-data tracking-type-schema})
   (d/transact new-conn {:tx-data tracking-types})
   (d/transact new-conn {:tx-data template-schema})
   (d/transact new-conn {:tx-data workout-schema})
   (d/transact new-conn {:tx-data workout-completed-exercise-schema})
   (d/transact new-conn {:tx-data workout-time-schema})
   (d/transact new-conn {:tx-data workout-set-schema})
   (seed-users new-conn))

(defn seed-demo [conn]
    (clear-demo-data conn)
    (let [db (d/db conn)
          users (d/q '[:find ?username
                       :where
                       [?u :user/username ?username]]
                     db)])
    (seed-templates)
    (generate-workout-days conn))


;; (defn ensure-db []
;;   (let [client (get-client)]
;;     (d/create-database client {:db-name db-name})))

(defn get-conn []
  (when (nil? @conn)
    (reset! conn (d/connect (get-client) db-name)))
  @conn)