(ns workout-demo.db.seeder
  (:require [vol1n.dynalog.api :as d])
  (:import [java.time LocalDate ZonedDateTime ZoneId LocalDateTime]))

(defn random-workout-type []
  (rand-nth [:upper-body :lower-body :run nil nil]))

(defn generate-completed-exercises [conn workout-template-id]
  (let [db (d/db conn)
        ;; Get exercises for the selected workout template
        exercises (d/q '[:find ?e ?num-sets ?tracking-type
                         :in $ ?t
                         :where
                         [?t :workout.template/exercises ?e]
                         [?e :workout.exercise/num-sets ?num-sets]
                         [?type :db/ident ?tracking-type]
                         [?e :workout.exercise/tracking-type ?type]]
                       db workout-template-id)]

    ;; Create completed exercises and their sets
    (mapv (fn [[exercise-id num-sets tracking-type]]
           (let [set-ids (for [_ (range num-sets)]
                           (str (gensym "set-"))) ;; Generate set entity IDs
                 set-entities (map-indexed (fn [i set-id]
                        (cond
                          (= tracking-type :workout.exercise/weightxreps)
                          {:db/id set-id
                           :workout.set/weight (+ 100 (* 10 (rand-int 5))) ;; Random weight within a range
                           :workout.set/reps (rand-nth [6 8 10])
                           :workout.set/order i}

                          (= tracking-type :workout.exercise/time)
                          {:db/id set-id
                           :workout.time/time (+ 150.0 (* 5 (rand-int 10)))
                           :workout.set/order i}))
                      set-ids)]
             ;; Create the completed-exercise entity
            {:completed-exercise {:db/id (str (gensym "completed-exercise-"))
              :workout.completed-exercise/exercise exercise-id
              :workout.completed-exercise/sets set-ids}
             :sets set-entities}
             ))
         exercises)))

(defn instant->local-date [instant]
  (if (nil? instant)
    nil
    (LocalDate/ofInstant instant (ZoneId/of "UTC"))))


(defn generate-workout-days [conn]
  (let [db (d/db conn)
        today (LocalDate/now)
        instant-max #(when (seq %) 
                     (apply max-key (fn [inst] (-> inst .toEpochMilli)) %))
        last-workout-day (->> (d/q '[:find ?ts
                            :in $ ?username
                            :where [?w :workout/timestamp ?ts]
                                  [?w :workout/user ?user]
                                  [?user :user/username ?username]]
                          db "demo")
                          flatten
                          instant-max
                          instant->local-date)
        start-date (or (.plusDays last-workout-day 1) (LocalDate/of 2025 2 1))
        date-seq (take-while #(.isBefore % today)
                             (iterate #(.plusDays % 1) start-date))

        ;; Get demo user ID
        ;; Get demo user ID
        demo-user-id (ffirst (d/q '[:find ?u
                                    :where [?u :user/username "demo"]]
                                  db))

        ;; Fetch workout templates
        templates (into {} (d/q '[:find ?name ?t
                                  :where [?t :workout.template/name ?name]]
                                db))
        upper-body-id (get templates "Upper Body")
        lower-body-id (get templates "Lower Body")
        run-id (get templates "800m Repeats")]
    (when demo-user-id
      (let [workout-txns
            (doall (for [date date-seq
                  :let [workout-type (random-workout-type)
                        workout-template-id (case workout-type
                                              :upper-body upper-body-id
                                              :lower-body lower-body-id
                                              :run run-id
                                              nil nil)]
                  :when workout-template-id] ;; Skip days with `nil`
                (let [generated (doall (generate-completed-exercises conn workout-template-id))
                      sets (mapcat :sets generated)
                      completed-exercises (map :completed-exercise generated)
                      entities-to-add (vec (concat sets completed-exercises))
                      completed-exercise-ids (map #(get % :db/id) completed-exercises)] 
              (conj entities-to-add {:workout/user demo-user-id
               :workout/template (case workout-type
                                   :upper-body upper-body-id
                                   :lower-body lower-body-id
                                   :run run-id)
               :workout/timestamp (.toInstant (ZonedDateTime/of (.atStartOfDay date) (ZoneId/of "UTC")))
               :workout/exercises completed-exercise-ids}))))]
        ;; Insert workouts into Datomic
        (when (seq (vec (mapcat identity workout-txns))) 

          (d/transact conn {:tx-data (vec (mapcat identity workout-txns))}))))))