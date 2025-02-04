(ns workout-demo.db.service
    (:require [datomic.client.api :as d]
              [workout-demo.db.schema :refer [get-conn]]))

(defn get-workouts-between [start-date end-date username]
    (println "start-date " start-date)
    (println "end-date " end-date)
    (println "low taper fade " username)
    (let [conn (get-conn)]
    (d/q '[:find (pull ?workout [:db/id
           :workout/timestamp
           {:workout/template 
            [:workout.template/name 
             :workout.template/symbol]}])
           :in $ ?start-date ?end-date ?username
           :where
          [?workout :workout/timestamp ?timestamp]
          [(<= ?start-date ?timestamp)]
          [(<= ?timestamp ?end-date)]
          [?user :user/username ?username]
          [?workout :workout/user ?user]]
        (d/db conn)
        start-date
        end-date
        username)))

(defn get-workouts-between-with-detail [start-date end-date username]
    (let [conn (get-conn)]
        (d/q '[:find (pull ?workout [:db/id
           :workout/timestamp
           {:workout/template 
            [:workout.template/name 
             :workout.template/symbol]}
           {:workout/exercises
            [{:workout.completed-exercise/exercise
             [:workout.exercise/name
              :workout.exercise/tracking-type]}
             {:workout.completed-exercise/sets
             [:workout.set/weight
              :workout.set/reps
              :workout.time/time]}]}])
           :in $ ?start-date ?end-date ?username
           :where
          [?workout :workout/timestamp ?timestamp]
          [(<= ?start-date ?timestamp)]
          [(<= ?timestamp ?end-date)]
          [?user :user/username ?username]
          [?workout :workout/user ?user]]
        (d/db conn)
        start-date
        end-date
        username)))


(defn get-templates [username]
  (let [conn (get-conn)]
      (d/q '[:find ?template ?name ?symbol
         :in $ ?username
         :where
         [?template :workout.template/name ?name]
         [?template :workout.template/symbol ?symbol]
         [?user :user/username ?username]
         [?template :workout.template/user ?user]]
        (d/db conn)
        username)))

(defn insert-exercise [exercise template-id]
  (println "should look like {:ident :workout.exercise/:work-1 :name \"Bench Press\", :tracking-type :workout.exercise/weightxreps}")
  (println "inserting exercise " exercise)
  (println "template-id " template-id)
  (let [data {:workout.exercise/name (:name exercise)
   :workout.exercise/tracking-type (:tracking-type exercise)
   :workout.exercise/num-sets (:num-sets exercise)}]
    (println "dataa " data)
    (println (= template-id "template"))
    (if (nil? (:id exercise))
      (merge {:db/id (str (gensym "exercise-"))} data )
    (merge {:db/id (:id exercise)} data ))))

(defn upsert-template [template username]
  (println "inserting template " template)
  (println "should look like {:id :timestamp {timestamp} :name \"Upper Body\" :exercises [{:name \"Bench Press\" :tracking-type :workout.exercise/weightxreps :num-sets 3}]}")
  (let [conn (get-conn)
        template-id (if (nil? (:id template)) 
                      "template"
                      (:id template))
        exercises (mapv #(insert-exercise % template-id) (:exercises template))
        exercise-ids (mapv :db/id exercises)
        tx-data (concat exercises [{:db/id template-id
                                :workout.template/name (:name template)
                                :workout.template/symbol (:symbol template)
                                :workout.template/user [:user/username username]
                                :workout.template/exercises exercise-ids}] )]
    (println "exporce " exercises)
    (println "ids " exercise-ids)
    (println "tx-data " tx-data)
    (d/transact conn {:tx-data tx-data})))

(defn insert-time [time]
  (println "inserting time " time)
  (println "should look like {:id (id?) :time 100.0}")
  (let [id (if (nil? (:id time)) 
                      (str (gensym "time-"))
                      (:id time))]
  {:db/id id
   :workout.time/time (:time time)}))

(defn insert-set [set]
  (println "inserting set " set)
  (println "should look like {:id (id?) :weight 100 :reps 10}")
  (let [id (if (nil? (:id set)) 
                      (str (gensym "set-"))
                      (:id set))]
  {:db/id id
   :workout.set/weight (:weight set)
   :workout.set/reps (:reps set)}))

(defn insert-workout-exercise [exercise template-id]
  (println "inserting exercise " exercise)
  (println "template-id " template-id)
  (println "should look like {id: (id?) :sets [{id: (id?) :weight 100 :reps 10}]}")
  (let [id (if (nil? (:id exercise)) 
                      (str (gensym "completed-exercise-"))
                      (:id exercise))
        sets (mapv insert-set (:sets exercise))]
  [{:db/id id
   :workout.completed-exercise/exercise [:workout.exercise/unique-key [(:name exercise) template-id]]
   :workout.completed-exercise/sets (mapv :db/id sets)} sets]))

(defn upsert-workout [workout username]
  (println "inserting workout " workout)
  (println "should look like {:exercises [...]}")
  (println "template-id ")
  (let [conn (get-conn)
        [exercises sets] (mapv #(insert-workout-exercise % (:template-id workout)) (:exercises workout))
        exercise-ids (mapv :db/id exercises)]
    (println "exporce " exercises)
    (println "sez " sets)
    
    (d/transact conn {:tx-data (concat 
      sets
      exercises
      [{:workout/exercises exercise-ids
        :workout/user [:user/username username]
        :workout/template (:template-id workout)}])})))

(defn get-template-full [id username]
  (let [conn (get-conn)
    res (d/pull 
      (d/db conn) 
      [:db/id
        {:workout.template/user
          [:user/username]}
        :workout.template/name
        :workout.template/symbol
        {:workout.template/exercises 
          [:db/id
           :workout.exercise/name
           :workout.exercise/tracking-type
           :workout.exercise/num-sets]}]
      id)]
    (if (not= username (get-in res [:workout.template/user :user/username]))
      nil
    res)))

(defn get-workouts [username]
  (let [conn (get-conn)]
    (->>
      (d/q '[:find ?workout
           :in $ ?username
           :where
           [?user :user/username ?username]
           [?workout :workout/user ?user]]
          (d/db conn) 
          username)
      (map (fn [[id name]] {:id id :name name})))))

(defn get-workout [id username]
  (let [conn (get-conn)
    res (d/pull 
      (d/db conn) 
      [{:workout/user
        [:user/username]}
       {:workout/template
        [:workout.template/name]}
       {:workout/exercises 
        [{:workout.completed-exercise/exercise
          [:workout.exercise/name]}
         {:workout.completed-exercise/sets
          [:workout.set/weight
           :workout.set/reps]}]}] 
      id)]
    (if (not= username (get-in res [:workout/user :user/username]))
      nil
    res)))

(defn get-exercises [username]
  (let [conn (get-conn)]
    (d/q '[:find ?template ?name
           :in $ ?username
           :where
           [?template :workout.template/user ?user]
           [?template :workout.template/exercises ?exercises]
           [?exercises :workout.exercise/name ?name]
           [?user :user/username ?username]]
          (d/db conn)
          username)))

(defn get-set-data-between [start-date end-date username exercise-name] 
  (let [conn (get-conn)]
    (d/q '[:find (pull ?workout [:db/id
           {:workout/exercises
            [{:workout.completed-exercise/sets
              [:workout.set/weight
               :workout.set/reps
               :workout.time/time]}]}])
           :in $ ?start-date ?end-date ?username ?name
           :where
          [?workout :workout/timestamp ?timestamp]
          [(<= ?start-date ?timestamp)]
          [(<= ?timestamp ?end-date)]
          [?user :user/username ?username]
          [?workout :workout/user ?user]
          [?workout :workout/exercises ?completed-exercises]
          [?completed-exercises :workout.exercise/name ?name]]
        (d/db conn)
        start-date
        end-date
        username
        exercise-name)))