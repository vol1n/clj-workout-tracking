(ns workout-demo.handlers.workouts
    (:require [workout-demo.db.service :refer [get-workouts-between get-workouts-between-with-detail upsert-workout]]
        [java-time.api :as jt]
        [clojure.spec.alpha :as s]))

(defn start-of-month [year month]
  (-> (jt/local-date-time year month 1 0 0) ;; First day of the month at midnight
      (jt/zoned-date-time "UTC")           ;; Convert to UTC
      jt/instant)) 

(defn day-from-instant [instant]
    (println "instank " instant)
  (-> instant
      jt/instant
      (jt/zoned-date-time "UTC")
      (jt/as :day-of-month)))          ;; Extract the day of the month

(defn fetch-month-summary [month year username]
    (let [adjusted-month (+ month 1)
          start-date (start-of-month year adjusted-month) ;; Our frontend uses 0-indexed months, Java uses 1
          next-month (cond 
            (= adjusted-month 12) 1
            :else (inc adjusted-month))
          next-year (cond
            (= adjusted-month 12) (inc year)
            :else year)
          end-date (start-of-month next-year next-month)
          workouts (mapv first (get-workouts-between (jt/java-date start-date) (jt/java-date end-date) username))]
        (println "start-date " start-date)
        (println "end-date " end-date)
        (println "workouts " workouts)
        (reduce (fn [acc workout]
            (println "workout " workout)
            (update acc (day-from-instant (:workout/timestamp workout)) conj {:name (get-in workout [:workout/template :workout.template/name]) :symbol (get-in workout [:workout/template :workout.template/symbol])}))
        {}
        workouts)))

(defn start-of-day [day month year]
    (-> (jt/local-date-time year month day 0 0)
        (jt/zoned-date-time "UTC")
        jt/instant))

(defn fetch-days-workouts [day month year username]
    (let [adjusted-month (+ month 1)
          start-date (start-of-day day adjusted-month year)
          end-date (jt/plus start-date (jt/days 1))]
        (mapv first (get-workouts-between-with-detail (jt/java-date start-date) (jt/java-date end-date) username))))

(s/def ::id int?)
(s/def ::time float?)
(s/def ::weight int?)
(s/def ::reps int?)
(s/def ::time-entry (s/keys :req-un [::time] :opt [::id]))
(s/def ::set (s/keys :req-un [::weight ::reps] :opt [::id]))
(s/def ::sets
  (s/or :set-collection (s/coll-of ::set :kind vector?)
        :time-collection (s/coll-of ::time-entry :kind vector?)))
(s/def ::template-id int?)
(s/def ::timestamp inst?)
(s/def ::exercise (s/keys :req-un [::name ::sets] :opt [::id]))
(s/def ::exercises (s/coll-of ::exercise :kind vector?))
(s/def ::workout (s/keys :req-un [::exercises ::template-id ::timestamp] :opt [::id]))

(defn log-workout [workout username]
  (println "koksdal " workout)
  (let [parsed-workout (assoc workout :timestamp (jt/instant (:timestamp workout)))]
    (println "workoot " parsed-workout)
    (println (s/explain-data ::workout parsed-workout))
    (assert (s/valid? ::workout parsed-workout))
    (upsert-workout parsed-workout username)))