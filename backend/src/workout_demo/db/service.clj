(ns workout-demo.db.service
    (:require [vol1n.dynalog.api :as d] 
              [workout-demo.db.schema :refer [get-conn]])
  (:import (java.time Instant)))

(defn get-workouts-between [start-date end-date username]
  (let [conn (get-conn)]
    (d/q '[:find (pull ?workout [:db/id
                                 :workout/timestamp
                                 {:workout/template
                                  [:workout.template/name
                                   :workout.template/symbol]}])
           :in $ ?start-date ?end-date ?username
           :where
           [?workout :workout/timestamp ?timestamp]
           [(<= (compare ?start-date ?timestamp) 0)]
           [(<= (compare ?timestamp ?end-date) 0)]
           [?user :user/username ?username]
           [?workout :workout/user ?user]]
         (d/db conn)
         start-date
         end-date
         username)))

(defn get-workouts-between-with-detail [start-date end-date username]
    (let [conn (get-conn)]
        (d/q '[:find (pull ?workout 
          [:db/id
           :workout/timestamp
           {:workout/template 
            [:db/id
             :workout.template/name 
             :workout.template/symbol]}
           {:workout/exercises
            [:db/id
             {:workout.completed-exercise/exercise
             [:db/id
              :workout.exercise/order
              :workout.exercise/name
              :workout.exercise/tracking-type]}
             {:workout.completed-exercise/sets
             [:db/id
              :workout.set/order
              :workout.set/weight
              :workout.set/reps
              :workout.time/time]}]}])
           :in $ ?start-date ?end-date ?username
           :where
          [?workout :workout/timestamp ?timestamp]
          [(<= (compare ?start-date ?timestamp) 0)]
          [(< (compare ?timestamp ?end-date) 0)]
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
  (let [data {:workout.exercise/name (:name exercise)
              :workout.exercise/order (:order exercise)
   :workout.exercise/tracking-type (keyword (:tracking-type exercise))
   :workout.exercise/num-sets (:num-sets exercise)}]
    (if (nil? (:id exercise))
      (merge {:db/id (str (gensym "exercise-"))} data )
    (merge {:db/id (:id exercise)} data ))))

(defn upsert-template [template username]
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
    (d/transact conn {:tx-data tx-data})))

(defn insert-time [time]
  (let [id (if (nil? (:id time)) 
                      (str (gensym "time-"))
                      (:id time))]
  {:db/id id
   :workout.time/time (float (:time time))
   :workout.set/order (:order time)}))

(defn insert-set [set]
  (let [id (if (nil? (:id set)) 
                      (str (gensym "set-"))
                      (:id set))]
  {:db/id id
   :workout.set/weight (:weight set)
   :workout.set/reps (:reps set)
   :workout.set/order (:order set)}))

(defn insert-workout-exercise [exercise template-id]
  (let [id (if (nil? (:id exercise)) 
                      (str (gensym "completed-exercise-"))
                      (:id exercise))
        insert-fn (case (keyword (get-in exercise [:exercise :tracking-type]))
                    :time insert-time
                    :workout.exercise/time insert-time
                    :weightxreps insert-set
                    :workout.exercise/weightxreps insert-set)
        sets (mapv insert-fn (:sets exercise))]
  [{:db/id id
   :workout.completed-exercise/exercise (get-in exercise [:exercise :id])
   :workout.completed-exercise/sets (mapv :db/id sets)} sets]))

(defn upsert-workout [workout username]
  (let [conn (get-conn)
        workout-id (if (nil? (:id workout)) 
                      (str (gensym "workout-"))
                      (:id workout))
        inserted (mapv #(insert-workout-exercise % (:template workout)) (:exercises workout))
        sets (mapcat second inserted)
        exercises (mapv first inserted)
        exercise-ids (mapv :db/id exercises)
        workout {:db/id workout-id
                 :workout/exercises exercise-ids
                 :workout/user [:user/username username]
                 :workout/template (:template workout)
                 :workout/timestamp (:timestamp workout)} 
        tx-result (d/transact conn {:tx-data (concat 
      sets
      exercises
      [workout])})]
      (d/pull (d/db conn) [:db/id
                           :workout/timestamp
                           {:workout/template
                            [:db/id
                             :workout.template/name
                             :workout.template/symbol]}
                           {:workout/exercises
                            [:db/id
                             {:workout.completed-exercise/exercise
                              [:db/id
                               :workout.exercise/order
                               :workout.exercise/name
                               :workout.exercise/tracking-type]}
                             {:workout.completed-exercise/sets
                              [:db/id
                               :workout.set/order
                               :workout.set/weight
                               :workout.set/reps
                               :workout.time/time]}]}] (or (get (:tempids tx-result) workout-id) workout-id))))

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
           :workout.exercise/num-sets
           :workout.exercise/order]}]
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
          [:workout.exercise/name
           :workout.exercise/order]}
         {:workout.completed-exercise/sets
          [:workout.set/weight
           :workout.set/reps
           :workout.set/order]}]}] 
      id)]
    (if (not= username (get-in res [:workout/user :user/username]))
      nil
    res)))

(defn get-exercises [username]
  (let [conn (get-conn)]
    (d/q '[:find ?name
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

    (d/q '[:find ?timestamp
            (pull ?completed-exercise [{:workout.completed-exercise/exercise
                                        [:workout.exercise/name
                                         :workout.exercise/tracking-type]}
                                       {:workout.completed-exercise/sets
                                        [:workout.set/weight
                                         :workout.set/reps
                                         :workout.time/time]}])
           :in $ ?start-date ?end-date ?username ?name
           :where
           [?workout :workout/timestamp ?timestamp]
           [(<= (compare ?start-date ?timestamp) 0)]
           [(<= (compare ?timestamp ?end-date) 0)]
           [?workout :workout/user ?user]
           [?user :user/username ?username]
           [?workout :workout/exercises ?completed-exercise]
           [?completed-exercise :workout.completed-exercise/exercise ?exercise]
           [?exercise :workout.exercise/name ?exercise-name]
           [(= ?exercise-name ?name)]]
          (d/db conn)
          start-date
          end-date
          username
          exercise-name)))

(defn update-last-login [username]
  (let [conn (get-conn)]
    (d/transact conn [{:workout/user
                       [:user/username username]
                       :workout.user/last-login (Instant/now)}])))