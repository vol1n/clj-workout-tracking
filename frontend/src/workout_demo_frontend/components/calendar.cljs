(ns workout-demo-frontend.components.calendar (:require [reagent.core :as r]
[reagent.ratom :as ratom]
[ajax.core :refer [GET]]
[workout-demo-frontend.components.workout2 :refer [select-workout]]
[clojure.string :as str]
[workout-demo-frontend.auth :refer [api-call logged-in?]]))

(def months ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
(def days ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])

(defn decrement-month [month year]
    (if (= month 0)
        [11 (dec year)]
    [(dec month) year]))

(defn increment-month [month year]
    (if (= month 11)
        [0 (inc year)]
    [(inc month) year]))

(def current-date {:month (.getMonth (js/Date.))
                           :year (.getFullYear (js/Date.))
                           :day (.getDate (js/Date.))})

(def selected-month (r/atom (let [{:keys [month year]} current-date]
    {:month month
     :year year})))

(defn first-day-of-month [month year]
    (let [first-of-month (js/Date. year month 1)]
        (.getDay first-of-month)))

(defn get-days-in-month [month year]
    (let [[next-month next-year] (increment-month month year) ;; Unlike elisp, let always expands to let* under the hood
        last-of-this-month (js/Date. next-year next-month 0)]
        (.getDate last-of-this-month)))

(defn chevron-right []
    [:svg {:class "w-6 h-6" :xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke "currentColor"}
        [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2" :d "M9 5l7 7-7 7"}]])

(defn chevron-left []
    [:svg {:class "w-6 h-6" :xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke "currentColor"}
        [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2" :d "M15 19l-7-7 7-7"}]])

(def month-summary (r/atom {}))

(defn calendar-header []
    (let [{:keys [month year]} @selected-month]
        [:div {:class "flex items-center justify-between mb-4"}
            [:button {:class "p-2 hover:bg-gray-100 rounded-full"
                :on-click #(let [[new-month new-year] (decrement-month month year)]
                (reset! selected-month {:month new-month :year new-year}))}
                [chevron-left]
                ]
            [:h2 {:class "text-xl font-bold"}(months month) " " year]
            [:button {:class "p-2 hover:bg-gray-100 rounded-full"
                     :on-click #(let [[new-month new-year] (increment-month month year)]
                                (reset! selected-month {:month new-month :year new-year}))}
                [chevron-right]]]))

(defn is-past-date? [day month year]
    (let [date (js/Date. year month day)
          today (js/Date.)]
        (< (.getTime date) (.setHours today 0 0 0 0))))

(defn is-current-date? [input-day input-month input-year]
    (let [{:keys [day month year]} current-date]
        (and (= input-day day)
             (= input-month month)
             (= input-year year))))

(def selected-day (r/atom nil))

(defn day-cell [day month year summary]
    (let [past? (is-past-date? day month year)
          current? (is-current-date? day month year)
          symbols (mapv :symbol (get summary (keyword (str day))))
          symbols-string (str/join "" symbols)
          base-classes "w-10 h-10 flex items-center justify-center rounded-full"]
        [:div {:class "flex items-center justify-center h-10"}
            [:div {:class (str base-classes " "
                              (cond
                                (not= (count symbols) 0) "bg-green-300 hover:bg-green-400 transition duration-200 text-white"
                                current? "bg-blue-500 hover:bg-blue-600 transition duration-200 text-white"
                                past? "bg-gray-100 hover:bg-gray-200 transition duration-200"
                                :else "hover:bg-gray-50"))
                    :on-click #(reset! selected-day {:day day :month month :year year})}
                (cond 
                (not= (count symbols-string) 0) symbols-string
                :else day)]]))

;; Together the two following functions are like a react query hook, fetching the month summary when the dependent state changes
(defn update-month-summary! [month year]
    (api-call GET "/summary"
        {:params {:month month :year year}
         :response-format :json
         :keywords? true ;; Ensure response keys are keywordized
         :handler #(do (swap! month-summary assoc {:month month :year year} %) (println "% fsdafasd" %)) ;; Callbacks
         :error-handler #(js/console.error "Failed to fetch summary" %)}))

(defonce fetch-trigger 
  (ratom/run! ;; Analagous to useEffect in React - except we don't need to specify deps - r/run returns nil whereas reaction returns something
    (let [{:keys [month year]} @selected-month]
        (when-not (or (get @month-summary {:month month :year year}) (not @logged-in?)) ;; Only fetch if we haven't already
            (update-month-summary! month year)))))

(defn invalidate-month! [y m]
  (println "invalidate-month! " y m)
  (swap! month-summary dissoc {:month m :year y}))

(defn calendar []
    (if (nil? @selected-day)
        (let [{:keys [month year]} @selected-month
              summary @month-summary
              this-month (get summary {:month month :year year})]
            [:div {:class "flex flex-col items-center"}
                [calendar-header]
                [:div {:class "grid grid-cols-7 gap-2 w-full mt-4 gap-y-10"}
                    (for [day days]
                        ^{:key day}
                        [:div {:class "flex items-center justify-center h-10 font-semibold"} day])
                    (for [i (range (first-day-of-month month year))]
                        ^{:key i}
                        [:div {:class "flex items-center justify-center h-10"} ""])
                    (for [day (range 1 (inc (get-days-in-month month year)))]
                        ^{:key day}
                        [day-cell day month year this-month])]])
        [select-workout (:day @selected-day) (:month @selected-day) (:year @selected-day) #(reset! selected-day nil) #(invalidate-month! (:year @selected-day) (:month @selected-day))]))
    