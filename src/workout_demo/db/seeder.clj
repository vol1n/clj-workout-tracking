(ns workout-demo.db.seeder
  (:require [datomic.client.api :as d]
            [java-time.api :as jt]))

(defn random-workout-type []
  (rand-nth [nil :upper-body :lower-body :run]))

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
                 set-entities (mapv (fn [set-id]
                        (println "set-id")
                        (println set-id)
                        (println tracking-type)
                        (println num-sets)
                        (cond
                          (= tracking-type :workout.exercise/weightxreps)
                          {:db/id set-id
                           :workout.set/weight (+ 100 (* 10 (rand-int 5))) ;; Random weight within a range
                           :workout.set/reps (rand-nth [6 8 10])}

                          (= tracking-type :workout.exercise/time)
                          {:db/id set-id
                           :workout.time/time (+ 150.0 (* 5 (rand-int 10)))}) ;; Random time range
                        )
                      set-ids)]
            (println "set-entities" set-entities)
             ;; Create the completed-exercise entity
            {:completed-exercise {:db/id (str (gensym "completed-exercise-"))
              :workout.completed-exercise/exercise exercise-id
              :workout.completed-exercise/sets set-ids}
             :sets set-entities}
             ))
         exercises)))


(defn generate-workout-days [conn]
  (let [db (d/db conn)
        today (jt/local-date)
        start-date (jt/local-date 2024 11 1)
        date-seq (take-while #(jt/before? % today) (iterate #(jt/plus % (jt/days 1)) start-date))

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
    (println "templates" templates)
    (println "upper-body-id" upper-body-id)
    (println "lower-body-id" lower-body-id)
    (println "run-id" run-id)
    
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
                    (println "entities-to-add" entities-to-add)
              (conj entities-to-add {:workout/user demo-user-id
               :workout/template (case workout-type
                                   :upper-body upper-body-id
                                   :lower-body lower-body-id
                                   :run run-id)
               :workout/timestamp (jt/java-date (jt/zoned-date-time date (jt/zone-id "UTC")))
               :workout/exercises completed-exercise-ids}))))]
        ;; Insert workouts into Datomic
        (println "workout-txns" workout-txns)
        ;;(println "mulch" (vec (mapcat identity workout-txns)))
        (when (seq (vec (mapcat identity workout-txns))) 

          (d/transact conn {:tx-data (vec (mapcat identity workout-txns))})
          (println (str "Seeded workouts for demo user from " start-date " to " (jt/minus today (jt/days 1)))))))))