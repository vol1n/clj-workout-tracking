(ns workout-demo.handlers.workouts
    (:require [workout-demo.db.service :refer [get-workouts-between get-workouts-between-with-detail upsert-workout]]
        [clojure.spec.alpha :as s]
              [clojure.walk :as walk])
  (:import [java.time LocalDateTime Duration ZoneId Instant]))

(defn start-of-month [year month]
  (-> (LocalDateTime/of year month 1 0 0) ;; First day of the month at midnight
      (.atZone (ZoneId/of "UTC"))           ;; Convert to UTC
      .toInstant)) 

(defn day-from-instant [instant]
  (-> instant
      (.atZone (ZoneId/of "UTC"))
      .toLocalDate
      .getDayOfMonth))

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
          workouts (mapv first (get-workouts-between start-date end-date username))]
        (reduce (fn [acc workout]
            (update acc (day-from-instant (:workout/timestamp workout)) conj {:name (get-in workout [:workout/template :workout.template/name]) :symbol (get-in workout [:workout/template :workout.template/symbol])}))
        {}
        workouts)))

(defn start-of-day [day month year]
    (-> (LocalDateTime/of year month day 0 0)
        (.atZone (ZoneId/of "UTC"))
        .toInstant))

(defn parse-workout [workout]
  
    (let [exercises (get workout :workout/exercises)
          exercises-updated (sort-by #(get-in % [:workout.completed-exercise/exercise :workout.exercise/order]) (reduce (fn [acc e]
                                                                                                                          (let [tracking-type
                                                                                                                                (get-in e [:workout.completed-exercise/exercise :workout.exercise/tracking-type])]
                                                                                                                            (if (not= tracking-type :workout.exercise/time)
                                                                                                                              (conj acc
                                                                                                                                    (update e :workout.completed-exercise/sets
                                                                                                                                            (fn [s] (sort-by :workout.set/order (vec (map #(dissoc % :workout.time/time) s))))))
                                                                                                                              (conj acc
                                                                                                                                    (update e :workout.completed-exercise/sets
                                                                                                                                            (fn [s] (sort-by :workout.set/order (vec (map #(dissoc % :workout.set/weight :workout.set/reps) s))))))))) [] exercises))]
      (println "before " exercises)
      (println "after" exercises-updated)
      (assoc workout :workout/exercises exercises-updated)))

(defn fetch-days-workouts [day month year username]
    (let [adjusted-month (+ month 1)
          start-date (start-of-day day adjusted-month year)
          end-date (.plus start-date (Duration/ofDays 1))
          query-result (get-workouts-between-with-detail start-date end-date username)
          
          parsed (mapv #(as-> % $
                          (first $)
                         (assoc $ :workout/timestamp (str (:workout/timestamp $)))
                         (parse-workout $)) query-result)]
      (println "query-result" query-result)
      parsed))

(s/def ::id (s/nilable string?))
(s/def ::time number?)
(s/def ::weight int?)
(s/def ::reps int?)
(s/def ::order int?)
(s/def ::time-entry (s/keys :req-un [::time ::order] :opt [::id]))
(s/def ::set (s/keys :req-un [::weight ::reps ::order] :opt [::id]))
(s/def ::sets
  (s/and
   vector?
   (fn [sets]
     (if (empty? sets)
       true
       (let [first-set (first sets)]
         (cond
           ;; If the first set has :time but not :weight or :reps, it's a time-collection
           (and (contains? first-set :time)
                (not (contains? first-set :weight))
                (not (contains? first-set :reps)))
           (every? #(s/valid? ::time-entry %) sets)

           ;; If the first set has :weight and :reps, it's a set-collection
           (and (contains? first-set :weight)
                (contains? first-set :reps))
           (every? #(s/valid? ::set %) sets)

           ;; If we can't determine the type, fail validation
           :else false))))))
(s/def ::template string?)
(s/def ::timestamp inst?)
(s/def ::exercise (s/keys :req-un [::sets] :opt-un [::id] :opt []))
(s/def ::exercises (s/coll-of ::exercise :kind vector?))
(s/def ::workout (s/keys :req-un [::exercises ::template] :opt [::id ::timestamp]))

(defn replace-map [map tempids]
  (walk/postwalk
   (fn [x]
     (if (string? x)
       (get tempids x x) ;; Replace if found, otherwise keep the original string
       x))
   map))

(defn log-workout [workout username]
  (when (:template workout) 
  (let [parsed-workout (assoc workout :timestamp (Instant/parse (:timestamp workout)))]
    (println parsed-workout)
    (println (s/explain-data ::workout parsed-workout))
    (assert (s/valid? ::workout parsed-workout))
    (let [upsert-result (assoc (upsert-workout parsed-workout username) :workout/timestamp (str (:timestamp parsed-workout)))]
      (println "upsert-result" upsert-result) 
      (parse-workout upsert-result)))))