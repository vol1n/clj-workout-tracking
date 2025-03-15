(ns workout-demo.db.schema
  (:require [workout-demo.db.seeder :refer [generate-workout-days]]
            [workout-demo.config :refer [get-config]]
            [datomic.client.api :as d]
            [datomic.client.api.sync]
            [datomic.client.api.impl])) 

;; Load config
(def config (delay (get-config)))

;; Determine environment
(def db-name "workout-demo")

;; Datomic Client setup
(defonce client (atom nil))
(defonce conn (atom nil))

(defn get-client []
  (when (nil? @client)
    (reset! client
            (d/client (if (= (:env @config) :dev)
                        {:server-type :datomic-local
                         :system "dev"
                         :storage-dir "/Users/colinryan/Projects/workout-demo/db"} 
                        {:server-type :cloud
                         :system "workout-demo-datomic-storage"
                         :region "us-east-1"
                         :endpoint "https://3k4652uhsi.execute-api.us-east-1.amazonaws.com/"})))) 
  @client)

(defn seed-users [conn]
  (let [db (d/db conn)

        existing-users (set (d/q '[:find ?username
                                   :where [_ :user/username ?username]]
                                 db)) 
        missing-users (remove #(contains? existing-users (name %)) (keys (:users @config)))] 
    (when (seq missing-users)
      (println "Seeding new users:" missing-users)
      (d/transact conn {:tx-data (mapv (fn [u] {:user/username (name u)}) missing-users)}))
    (println "Existing users:" (d/q '[:find ?username
       :where [_ :user/username ?username]]
     (d/db conn)))))

(def user-schema
  [{:db/ident :user/username
    :db/valueType :db.type/string
    :db/unique :db.unique/identity
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
   {:db/ident :workout.exercise/unique-key 
    :db/valueType :db.type/tuple
    :db/tupleTypes [:db.type/string :db.type/ref]
    :db/unique :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident :workout.exercise/num-sets
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
            (d/transact conn {:tx-data (mapv #(vector :db/retractEntity %) entities-to-delete)}))
          (println "Cleared data for demo user.")))))

(defn seed-templates []
  (let [;; Define temporary IDs for exercises
        bench-press-id "bench-press"
        pull-ups-id    "pull-ups"
        squats-id      "squats"
        lunges-id      "lunges"
        run-800-id     "run-800"

        completed-bench-press-id "completed-bench-press"
        completed-pull-ups-id    "completed-pull-ups"
        completed-squats-id      "completed-squats"
        completed-lunges-id      "completed-lunges"
        completed-run-800-id     "completed-run-800"

        ;; Define templates with references to exercise IDs
        upper-body-template-id "upper-body"
        lower-body-template-id "lower-body"
        run-template-id        "run"

        bench-press-sets [{:db/id "bench-press-set-1"
                           :workout.set/weight 100
                           :workout.set/reps 10}
                          {:db/id "bench-press-set-2"
                           :workout.set/weight 110
                           :workout.set/reps 8}]
        pull-ups-sets [{:db/id "pull-ups-set-1"
                        :workout.set/reps 12}
                       {:db/id "pull-ups-set-2"
                        :workout.set/reps 10}]
        squats-sets [{:db/id "squats-set-1"
                      :workout.set/weight 200
                      :workout.set/reps 10}
                     {:db/id "squats-set-2"
                      :workout.set/weight 210
                      :workout.set/reps 8}]
        lunges-sets [{:db/id "lunges-set-1"
                      :workout.set/weight 50
                      :workout.set/reps 12}
                     {:db/id "lunges-set-2"
                      :workout.set/weight 60
                      :workout.set/reps 10}]
        run-800-sets [{:db/id "run-800-set-1"
                       :workout.time/time 180.0}
                      {:db/id "run-800-set-2"
                       :workout.time/time 175.5}]

        ;; Define exercises
        exercises [{:db/id bench-press-id
                    :workout.exercise/name "Bench Press"
                    :workout.exercise/num-sets 3
                    ;;:workout.exercise/unique-key ["Bench Press" upper-body-template-id]
                    :workout.exercise/tracking-type :workout.exercise/weightxreps}
                   {:db/id pull-ups-id
                    :workout.exercise/name "Pull-ups"
                    :workout.exercise/num-sets 3
                    ;;:workout.exercise/unique-key ["Pull-ups" upper-body-template-id]
                    :workout.exercise/tracking-type :workout.exercise/weightxreps}
                   {:db/id squats-id
                    :workout.exercise/name "Squats"
                    :workout.exercise/num-sets 2
                    ;;:workout.exercise/unique-key ["Squats" lower-body-template-id]
                    :workout.exercise/tracking-type :workout.exercise/weightxreps}
                   {:db/id lunges-id
                    :workout.exercise/name "Lunges"
                    :workout.exercise/num-sets 2
                    ;;:workout.exercise/unique-key ["Lunges" lower-body-template-id]
                    :workout.exercise/tracking-type :workout.exercise/weightxreps}
                   {:db/id run-800-id
                    :workout.exercise/name "800m Run"
                    :workout.exercise/num-sets 4
                    ;;:workout.exercise/unique-key ["800m Run" run-template-id]
                    :workout.exercise/tracking-type :workout.exercise/time}]

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
                    :workout.template/symbol "🏃‍♂️"}]

        completed-exercises [{:db/id completed-bench-press-id
                              :workout.completed-exercise/exercise bench-press-id
                              :workout.completed-exercise/sets (map :db/id bench-press-sets)}
                             {:db/id completed-pull-ups-id
                              :workout.completed-exercise/exercise pull-ups-id
                              :workout.completed-exercise/sets (map :db/id pull-ups-sets)}
                             {:db/id completed-squats-id
                              :workout.completed-exercise/exercise squats-id
                              :workout.completed-exercise/sets (map :db/id squats-sets)}
                             {:db/id completed-lunges-id
                              :workout.completed-exercise/exercise lunges-id
                              :workout.completed-exercise/sets (map :db/id lunges-sets)}
                             {:db/id completed-run-800-id
                              :workout.completed-exercise/exercise run-800-id
                              :workout.completed-exercise/sets (map :db/id run-800-sets)}]
        workouts [{:db/id "workout-1-id"
                   :workout/user [:user/username "demo"]
                   :workout/template upper-body-template-id
                   :workout/timestamp #inst "2025-01-05T10:00:00.000Z"
                   :workout/exercises [completed-bench-press-id completed-pull-ups-id]}
                  {:db/id "workout-2-id"
                   :workout/user [:user/username "demo"]
                   :workout/template lower-body-template-id
                   :workout/timestamp #inst "2025-01-10T11:00:00.000Z"
                   :workout/exercises [completed-squats-id completed-lunges-id]}
                  {:db/id "workout-3-id"
                   :workout/user [:user/username "demo"]
                   :workout/template run-template-id
                   :workout/timestamp #inst "2025-01-15T12:00:00.000Z"
                   :workout/exercises [completed-run-800-id]}]]
    (concat exercises templates bench-press-sets pull-ups-sets squats-sets lunges-sets run-800-sets completed-exercises workouts)))


(defn setup-db [new-conn]
    ;; Define schema for person and address
    (d/transact new-conn {:tx-data user-schema})
    (d/transact new-conn {:tx-data [
      {:db/ident :workout/type
       :db/valueType :db.type/ref
       :db/cardinality :db.cardinality/one
       :db/doc "The type of the workout"}
      {:db/ident :workout/exercises
       :db/valueType :db.type/ref
       :db/cardinality :db.cardinality/many
       :db/doc "The exercises of the workout"}]})
    (d/transact new-conn {:tx-data exercise-schema})
    (d/transact new-conn {:tx-data tracking-type-schema})
    (d/transact new-conn {:tx-data tracking-types})
    (d/transact new-conn {:tx-data template-schema})
    (d/transact new-conn {:tx-data workout-schema})
    (d/transact new-conn {:tx-data workout-completed-exercise-schema})
    (d/transact new-conn {:tx-data workout-time-schema})
    (d/transact new-conn {:tx-data workout-set-schema})
    (seed-users new-conn)
    (clear-demo-data new-conn)
    (let [db (d/db new-conn)
      users (d/q '[:find ?username
                   :where
                   [?u :user/username ?username]]
                 db)]
    (println "Usernames in DB:" users))
    (d/transact new-conn {:tx-data (seed-templates)})
    (generate-workout-days new-conn)
    (println "querying for workout types"))


(defn ensure-db []
  (let [client (get-client)]
    (d/create-database client {:db-name db-name})))

(defn get-conn []
  (when (nil? @conn)
    (ensure-db)
    (reset! conn (d/connect (get-client) {:db-name db-name}))
    (setup-db @conn))
  @conn)
