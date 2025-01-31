(ns workout-demo-frontend.components.workout
    (:require [reagent.core :as r]
              [clojure.string :as str]
              [ajax.core :refer [GET POST]]
              [reagent.ratom :as ratom]))

(def workouts (r/atom nil))
(def selected-workout (r/atom nil))

(def exercises (r/atom nil))
(def expanded (r/atom nil))
(def workout-types [{:type :track :label "Track"} 
                    {:type :lifting :label "Lifting"}
                    {:type :other :label "Other"}])

(defn format-sets [sets]
    (str/join ", "
        (for [set sets]
            (str (:weight set) "x" (:reps set)))))

(defn plus-sign []
  [:svg {:xmlns "http://www.w3.org/2000/svg"
         :viewBox "0 0 24 24"
         :fill "none"
         :stroke "currentColor"
         :stroke-width "2"
         :class "w-6 h-6"}
   [:line {:x1 "12" :y1 "5" :x2 "12" :y2 "19" :stroke-linecap "round"}]
   [:line {:x1 "5" :y1 "12" :x2 "19" :y2 "12" :stroke-linecap "round"}]])

(defn x-sign []
  [:svg {:xmlns "http://www.w3.org/2000/svg"
         :viewBox "0 0 24 24"
         :fill "none"
         :stroke "currentColor"
         :stroke-width "2"
         :class "w-6 h-6"}
   [:line {:x1 "5" :y1 "5" :x2 "19" :y2 "19" :stroke-linecap "round"}]
   [:line {:x1 "19" :y1 "5" :x2 "5" :y2 "19" :stroke-linecap "round"}]])

(defn fetch-workouts [day month year]
  (GET "http://localhost:3000/workouts"
       {:params {:day day :month month :year year}
        :response-format :json
        :keywords? true ;; Ensure response keys are keywordized
        :handler #(swap! workouts assoc {:day day :month month :year year} (:workouts %)) ;; Callbacksa
        :error-handler #(js/console.error "Failed to fetch summary" %)}))

(defn fetch-exercises []
    (println "fetching exercises")
    (GET "http://localhost:3000/exercises"
       {:response-format :json
        :keywords? true ;; Ensure response keys are keywordized
        :handler #(reset! exercises (:exercises %)) 
        :error-handler #(js/console.error "Failed to fetch summary" %)}))

(defn add-workout [workout on-success]
    (println "workout " workout)
    (if (= 0 (count (:exercises workout))) 
        (js/alert "Please add at least one exercise")
    (POST "http://localhost:3000/workouts"
       {:params {:workout workout}
        :response-format :json
        :keywords? true ;; Ensure response keys are keywordized
        :handler on-success ;; Callbacksa
        :error-handler #(js/console.error "Failed to add workout" %)})))

(defonce expanded-change-trigger 
  (ratom/run! ;; Analagous to useEffect in React - except we don't need to specify deps - r/run returns nil whereas reaction returns something
    (println "expanded " @expanded)))

(defn remove-at [v i]
  (vec (concat (subvec v 0 i) (subvec v (inc i)))))

(defn weight-reps-input [i j]
[:div {:class "flex flex-col gap-y-2 mt-2"} ;; Styling for spacing

[:div {:class "flex items-center gap-x-2"}
                                    [:label {:class "w-1/3"} "Weight:"]
                                    [:input {:type "number"
                                             :class "border p-2 rounded-md w-full"
                                             :value (:weight set) ;; Controlled input value
                                             :on-change #(swap! selected-workout assoc-in [:exercises i :sets j :weight] 
                                                                (js/parseInt (.. % -target -value)))}]]
                                   ;; Reps Input
                                   [:div {:class "flex items-center gap-x-2"}
                                    [:label {:class "w-1/3"} "Reps:"]
                                    [:input {:type "number"
                                             :class "border p-2 rounded-md w-full"
                                             :value (:reps set) ;; Controlled input value
                                             :on-change #(swap! selected-workout assoc-in [:exercises i :sets j :reps] 
                                                                (js/parseInt (.. % -target -value)))}]]])

(defn exercise-form []
    [:div 
                [:label {:class "w-1/3"} "Exercises:"]
                (let [exercises-this-workout (:exercises @selected-workout)
                      current-expanded @expanded
                      current-selected (:type @selected-workout)
                      exercise-options (current-selected @exercises)]
                    (doall (for [[index exercise] (map-indexed vector exercises-this-workout)]
                        ^{:key index}
                        [:div {:class "border-gray-200 bg-white rounded-md"}
                            [:div {:on-click #(swap! expanded (fn [current] (if (= index current) nil index)))}
                                [:h2 {:class "text-lg font-bold"} (:name exercise)]]
                            (when (= current-expanded index) 
                                [:div {:class "flex flex-col gap-y-4 mt-2"}
                                [:select {:class "border-gray-200 bg-white rounded-md"
                                    :value (get-in selected-workout [:exercises index :ident])
                                    :default (first exercise-options)
                                    :on-change #(swap! selected-workout assoc-in [:exercises index] (first (filter (fn [option] (= (:ident option) (.. % -target -value))) exercise-options)))}
                                    (for [[index option] (map-indexed vector exercise-options)]
                                        ^{:key index}
                                        [:option {:value (:ident option)} (:name option)])]
                                (for [[j _] (map-indexed vector (:sets exercise))]
                                  ^{:key j}
                                  [:div {:class "flex items-center gap-x-2"}
                                    [:label {:class "w-1/3"} "Set " (inc j) ": " (format-sets (:sets exercise))]
                                  (let [exercise-name (get-in exercises-this-workout [index :name])
                                        exercise-data (first (filter #(= exercise-name (:name %)) exercise-options))
                                        tracking-type (:tracking-type exercise-data)]
                                  (cond
                                    (= j current-expanded) (cond 
                                        (= "workout.exercise/weightxreps" tracking-type) (weight-reps-input index j)
                                        )))
                                  [:button {:class "flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full bg-red-500 text-white"
                                          :on-click #(swap! selected-workout update-in [:exercises index :sets] (fn [sets] (remove-at sets j)))}
                                      [x-sign]]])
                                [:button {:class "flex items-center gap-2 p-2 hover:bg-gray-100 border-gray-200 rounded-full w-1/4"
                                          :on-click #(swap! selected-workout update-in [:exercises index :sets] conj {:weight 0 :reps 0})}
                                    [plus-sign]
                                    "Add Set"]])]))
                [:button {:class "flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full bg-blue-500 text-white"
                            :on-click #(swap! selected-workout update :exercises conj {:exercise (first exercise-options) :sets []})}
                    [plus-sign]
                    "Add Exercise"])]
    )

(defn workout-form [close-fn]
    (if (nil? @selected-workout)
        [:p "Loading..."]
    [:div {:class "flex flex-col gap-y-4"}
            [:div 
                [:label {:class "w-1/3"} "Workout Type:"]
                [:select {:class "border-gray-200 bg-white rounded-md"
                    :on-change #(swap! selected-workout assoc :type (keyword (.. % -target -value)))}
                    (for [[index workout-type] (map-indexed vector workout-types)]  
                        ^{:key (str index (:type workout-type))}
                        [:option {:value (:type workout-type)} (:label workout-type)])]]
            [exercise-form]
            [:button {:class "absolute bottom-0 p-2 hover:bg-green-300 text-white rounded-full" :on-click #(add-workout @selected-workout close-fn)} "Submit"]]))

(defn select-workout-from-day [day month year close-fn]
    (when (nil? @workouts)
        (println "fetching workouts")
        (fetch-workouts day month year))
    (when (nil? @exercises)
        (println "fetching exercises")
        (fetch-exercises))
    [:div {:class "relative p-4 bg-gray-50 min-h-screen"} ;; Wrapper container
        ;; X Button pinned to the top-right
        [:button {:class "absolute top-2 right-2 p-2 text-gray-500 hover:text-red-500"
                 :on-click close-fn}
            [x-sign]]
            (cond 
                (nil? @workouts) [:p "Loading..."]
                :else (cond 
                    (nil? @selected-workout) [:div {:class "grid grid-cols-1 items-center gap-y-4 mt-6"}
                        (for [[index workout] (map-indexed vector (get @workouts {:day day :month month :year year}))]
                            ^{:key index}
                            [:div {:class "flex items-center gap-x-4"
                                :on-click #(reset! selected-workout workout)}
                                [:h2 {:class "text-lg font-bold"} (:type workout)]])
                        [:button {:class "flex items-center gap-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                                  :on-click #(reset! selected-workout {:id nil :exercises [] :type :lifting})}
                            [plus-sign]
                            "Add Workout"]]
                    :else [workout-form @selected-workout close-fn]))])