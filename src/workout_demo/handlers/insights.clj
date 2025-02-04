(ns workout-demo.handlers.insights
    (:require [workout-demo.db.service :refer [get-exercises get-set-data-between]]
              [java-time :as jt]))

(defn fetch-exercises [username]
  (let [exercises (get-exercises username)]
    (reduce (fn [acc [id name]]
              (conj acc {:id id :name name})) [] exercises)))

(defn start-of-day [day month year]
    (-> 
        (jt/local-date-time year month day 0 0)
        (jt/zoned-date-time "UTC")
        jt/instant))

(defn fetch-progress [username {start-day :day start-month :month start-year :year} {end-day :day end-month :month end-year :year} exercise-name]
    (println "fetching progress")
    (println "start-day " start-day)
    (println "start-month " start-month)
    (println "start-year " start-year)
    (let [adjusted-start-month (+ start-month 1)
          adjusted-end-month (+ end-month 1)
          set-data (get-set-data-between (jt/java-date (start-of-day start-day adjusted-start-month start-year)) (jt/java-date (start-of-day end-day adjusted-end-month end-year)) username exercise-name)]
        set-data))