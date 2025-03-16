(ns workout-demo-frontend.components.insights
    (:require [reagent.core :as r]
              ["recharts" :as recharts]
              [ajax.core :refer [GET]]
              [workout-demo-frontend.auth :refer [api-call]]))

(def chart-data (r/atom
  {:data {:values []
          :tracking-type :workout.exercise/weightxreps}
   :mark "line"
   :encoding {:x {:field "date" :type "temporal" :timeUnit "yearmonthdate"}
              :y {:field "weight" :type "quantitative"}}}))

(defn format-date [js-date]
  (subs (.toISOString js-date) 0 10))

(def selected-exercise (r/atom ""))
(def selected-time-range (r/atom :2weeks))
(def exercise-options (r/atom nil))

(def exercise-to-data (r/atom {}))

(defn fetch-exercises [on-success]
  (reset! exercise-options :fetching) 
  (api-call GET "/exercises" {:handler on-success}))

(defn date-offset [offset]
  (let [date (js/Date.)]
    (.setDate date (- (.getDate date) offset))
    date))

(defn extract-date [^js date]
  {:day (.getDate date)             ;; Day of the month (1-31)
   :month (.getMonth date)    ;; Month (0-based in JS, so +1)
   :year (.getFullYear date)})

(defn fetch-graph-data [exercise-name range on-success]
    (let [days-offset (case range
            :2weeks 14
            :1month 30
            :3months 90
            :6months 180
            :1year 365)
          end-date (date-offset 0)
          start-date (date-offset days-offset)
          {start-day :day start-month :month start-year :year} (extract-date start-date)
          {end-day :day end-month :month end-year :year} (extract-date end-date)]
        (api-call GET "/progress" 
            {:params {:start-day start-day :start-month start-month :start-year start-year :end-day end-day :end-month end-month :end-year end-year :exercise exercise-name}
             :format :json
             :response-format :json
             :keywords? true
             :handler on-success})))

(defn parse-date [date]
    (subs date 1 11))

(defn process-graph-data [data]
    (let [values (reduce (fn [acc [k v]] (conj acc {:date (parse-date (str k)) :weight (get-in v [:sets 0 :weight]) :reps (get-in v [:sets 0 :reps]) :time (get-in v [:sets 0 :time])})) [] data)
          tracking-type (keyword (get-in data [(first (keys data)) :tracking-type]))]
        {:values (sort-by :date values) :tracking-type tracking-type}))

(defn update-chart! [exercise-name range]
    (let [data @exercise-to-data
          exercise-data (get-in data [(keyword exercise-name) range])]
        (if (nil? exercise-data)
                (fetch-graph-data exercise-name range #(do  
                    (swap! exercise-to-data (fn [prev] (assoc-in prev [(keyword exercise-name) range] (process-graph-data %))))
                    (swap! chart-data (fn [prev] (assoc prev :data (process-graph-data %))))))
        (swap! chart-data #(assoc-in % [:data :values] exercise-data)))))

(defn update-selected-exercise! [exercise-name]
    (let [range @selected-time-range]
        (reset! selected-exercise exercise-name)
        (update-chart! exercise-name range)))

(defn update-selected-time-range! [range]
    (let [exercise @selected-exercise]
        (reset! selected-time-range (keyword range))
        (update-chart! exercise (keyword range))))

(defn custom-tooltip [props]
  (let [{:keys [payload active]} props]
    (when (and active (seq payload))
      (let [^js inner-payload (.-payload (first payload))] ;; Extract values
        [:div {:style {:background "white" :border "1px solid black" :padding "5px"}}
            (if (nil? (.-time inner-payload))
                [:div 
                    [:p (str "Weight: " (.-weight inner-payload) " lbs")]
                    [:p (str "Reps: " (.-reps inner-payload))]]
                [:p (str "Time: " (.-time inner-payload) " s")])])))) ;; Show reps in tooltip

(def tooltip-wrapper (r/reactify-component custom-tooltip))

(defn chart []
    (let [data @chart-data]  ;; Transform the atom's data
        [:> recharts/ResponsiveContainer {:width "100%" :height 300}
            [:> recharts/LineChart {:data (get-in data [:data :values])}
                [:> recharts/XAxis {:dataKey :date}] ;; Show MM-DD
                [:> recharts/YAxis {}]
                [:> recharts/Tooltip {:content tooltip-wrapper}]
                [:> recharts/Legend {}]
                (if (= :workout.exercise/weightxreps (get-in data [:data :tracking-type]))
                    [:> recharts/Line {:type "monotone" :dataKey :weight :stroke "#8884d8"}]
                [:> recharts/Line {:type "monotone" :dataKey :time :stroke "#82ca9d"}])]]))

(defn insights []
    (when (nil? @exercise-options)
        (fetch-exercises #(reset! exercise-options %)))
    (let [current-selected @selected-exercise
          current-options @exercise-options
          current-time-range @selected-time-range
          current-chart-data @chart-data]
        [:div {:class "relative p-4 bg-gray-50 min-h-screen"}
            [:div {:class "mt-2"}]
            [:h2 {:class "text-lg font-bold mb-2"} "Insights"]
            [:div {:class "flex items-center gap-x-6"}
             (when (not= current-options :fetching)
                [:select {:on-change #(update-selected-exercise! (.-value (.-target %)))
                          :value current-selected}
                    [:option {:value ""} "Select an exercise"] 
                    (for [[i exercise] (map-indexed vector current-options)]
                        [:option {:key (str exercise i) :value exercise} exercise])])
            [:select {:on-change #(update-selected-time-range! (.-value (.-target %)))
                      :value current-time-range}
                [:option {:value :2weeks} "Last 2 weeks"]
                [:option {:value :1month} "Last month"]
                [:option {:value :3months} "Last 3 months"]
                [:option {:value :6months} "Last 6 months"]
                [:option {:value :1year} "Last year"]]]
            [:div {:class "mt-4"}
                (when (not= current-selected "")
                    (if (= (count (get-in current-chart-data [:data :values])) 0)
                        [:p {:class "text-sm text-gray-500"} "No values to display"]
                    [chart]))]]))