(ns workout-demo.handlers.insights
    (:require [workout-demo.db.service :refer [get-exercises get-set-data-between]]
              [java-time.api :as jt]))

(defn fetch-exercises [username]
  (let [exercises (get-exercises username)]
    (mapv last exercises)))

(defn start-of-day [day month year]
    (-> 
        (jt/local-date-time year month day 0 0)
        (jt/zoned-date-time "UTC")
        jt/instant))

(defn fetch-progress [username {start-day :day start-month :month start-year :year} {end-day :day end-month :month end-year :year} exercise-name]
    (println "input: " start-day start-month start-year end-day end-month end-year exercise-name)
    (let [adjusted-start-month (+ start-month 1)
          adjusted-end-month (+ end-month 1)
          set-data (get-set-data-between (jt/java-date (start-of-day start-day adjusted-start-month start-year)) (jt/java-date (start-of-day end-day adjusted-end-month end-year)) username exercise-name)]
        (println "set-data " set-data)
        (reduce (fn [acc [timestamp {{name :workout.exercise/name {tracking-type :db/ident} :workout.exercise/tracking-type} :workout.completed-exercise/exercise sets :workout.completed-exercise/sets}]]
            (assoc acc (jt/instant timestamp) {:tracking-type tracking-type :sets sets})) {} set-data)))