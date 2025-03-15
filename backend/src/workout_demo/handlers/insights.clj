(ns workout-demo.handlers.insights 
  (:require [workout-demo.db.service :refer [get-exercises get-set-data-between]])
  (:import [java.time LocalDateTime ZonedDateTime ZoneId]))

(defn fetch-exercises [username]
  (let [exercises (get-exercises username)]
    (mapv last exercises)))

(defn start-of-day [day month year]
    (-> 
        (LocalDateTime/of year month day 0 0)
        (.atZone (ZoneId/of "UTC"))
        .toInstant))

(defn fetch-progress [username {start-day :day start-month :month start-year :year} {end-day :day end-month :month end-year :year} exercise-name]
    (println "input: " start-day start-month start-year end-day end-month end-year exercise-name)
    (let [adjusted-start-month (+ start-month 1)
          adjusted-end-month (+ end-month 1)
          set-data (get-set-data-between (start-of-day start-day adjusted-start-month start-year) (start-of-day end-day adjusted-end-month end-year) username exercise-name)
          parsed (reduce (fn [acc [timestamp {{name :workout.exercise/name tracking-type :workout.exercise/tracking-type} :workout.completed-exercise/exercise sets :workout.completed-exercise/sets}]]
                           (assoc acc (str timestamp) {:tracking-type tracking-type :sets sets})) {} set-data)]
      (println "set data: " set-data)
      (println "parsed" parsed)
  parsed))