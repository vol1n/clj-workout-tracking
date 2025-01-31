(ns workout-demo-frontend.components.workout2
    (:require [reagent.core :as r]
    [reagent.ratom :as ratom]
    [ajax.core :refer [GET POST]]
    [workout-demo-frontend.components.list-button :refer [list-button]]
    [workout-demo-frontend.util.templates :refer [fetch-templates fetch-template]]
    [workout-demo-frontend.components.icons :refer [plus-sign x-sign]]
    [workout-demo-frontend.auth :refer [api-call]]))



;; State
(def app-state (r/atom {
    :templates nil ;; the templates to choose from
    :todays-workouts nil ;; [{:name "Upper Body", :symbol "🏋️"}]
    :selected-workout nil ;; id or nil
    :new-workout nil ;; set to true if add-workout is clicked, show select-template
}))

(def form-state (r/atom {
    :template nil ;; id or nil
    :exercises [] ;; the actual form data - load from template on template selection 
    :expanded nil ;; index of expanded exercise
}))

(def last-save (r/atom nil))
(defonce save-timeout (atom nil))

;; Util
(defn format-time [timestamp]
    (let [date (js/Date. timestamp)
          hours (.getHours date)
          minutes (.getMinutes date)
          padded-minutes (if (< minutes 10) (str "0" minutes) minutes)]
          (println "hours " hours)
          (println "minutes " minutes)
          (println "date " date)
        (str hours ":" padded-minutes)))

;; API
(defn fetch-workouts [day month year on-success]
    (println "fetching workouts")
    (api-call GET "http://localhost:3000/workouts"
        {:params {:day day :month month :year year}
         :response-format :json
         :keywords? true ;; Ensure response keys are keywordized
         :handler on-success
         :error-handler #(js/console.error "Failed to fetch summary" %)}))

(defn update-templates! []

    (let [on-success #(swap! app-state (fn [prev] (assoc prev :templates %)))]
        (fetch-templates on-success)))

(defn save-workout! []
    (let [current-form-state @form-state]
        (api-call POST "http://localhost:3000/workouts"
            {:params current-form-state
             :format :json
             :response-format :json
             :keywords? true 
             :handler #(do
                (println "workout saved")
                (reset! last-save (js/Date.))
                (swap! form-state assoc :exercises []))
             :error-handler #(js/console.error "Failed to add workout" %)})))

(defn update-template! [id]
    (let [on-success #(do
        (let [exercises (:exercises %)
              build-new-exercise (fn [exercise] {:exercise {:name (:name exercise)
                                                            :tracking-type (:tracking-type exercise)}
                                                 :sets (for [_ (range (:num-sets exercise))]
                                                         (case (keyword (get-in exercise [:tracking-type :ident]))
                                                             :workout.exercise/weightxreps {:weight 0 :reps 0}
                                                             :workout.exercise/time {:time 0}))})
              new-exercises (mapv build-new-exercise exercises)]
            (swap! form-state (fn [prev] (assoc prev :template id :exercises new-exercises)))
            (swap! app-state (fn [prev] (assoc prev :new-workout false)))))]
        (fetch-template id on-success)))


;; "hooks"
(defonce select-workout-trigger 
  (ratom/run! ;; Analagous to useEffect in React - except we don't need to specify deps - r/run returns nil whereas reaction returns something
    (let [selected-workout-id (:selected-workout @app-state)
          exercises (:exercises @form-state)
          selected-workout (some #(when (= (:id %) selected-workout-id) %) (:todays-workouts @app-state))]
        (println "selected-workout-id " selected-workout-id)
        (println "selected-workout " selected-workout)
      (when (and selected-workout-id (= (count exercises) 0))
        (swap! form-state assoc :exercises (:exercises selected-workout))))))


(defn schedule-save! []
  ;; Clear any existing timeout
  (when @save-timeout (js/clearTimeout @save-timeout))
  ;; Set a new timeout for 3 seconds
  (reset! save-timeout
    (js/setTimeout
      (fn []
        (reset! save-timeout nil) ;; Clear timeout after execution
        (save-workout!)) ;; Save the workout
      3000))) ;; 3s delay

(defonce auto-save-workout-trigger
  (ratom/run!
    (when (not= 0 (count (:exercises @form-state))) ;; Only trigger if form has data
      (schedule-save!))))

;; State management
(defn update-workouts! [day month year] ;; 
    (let [on-success #(swap! app-state (fn [prev] (assoc prev :todays-workouts %)))]
        (fetch-workouts day month year on-success)))

;; Components
;; Flow: select workout -> select template if adding workout -> workout form 
(defn time-entry [value on-change]
    [:input {:class "w-1/3"
            :value value
            :on-change on-change}])
        
(defn set-entry [weight-value reps-value on-weight-change on-reps-change]
    [:div {:class "flex items-center gap-x-2"}
        [:label {:class "w-1/3"} "Weight:"]
        [:input {:type "number"
                 :class "border p-2 rounded-md w-full"
                 :value weight-value ;; Controlled input value
                 :on-change #(on-weight-change (js/parseInt (.. % -target -value)))}]
        [:label {:class "w-1/3"} "Reps:"]
        [:input {:type "number"
                 :class "border p-2 rounded-md w-full"
                 :value reps-value ;; Controlled input value
                 :on-change #(on-reps-change (js/parseInt (.. % -target -value)))}]])

(defn workout-form []
    (let [workout-id (:selected-workout @app-state)
          workout-name (some #(when (= (:id %) workout-id) (:name (:template %))) (:todays-workouts @app-state))
          exercises (:exercises @form-state)]
    [:div 
        [:h1 {:class "text-2xl font-bold"} workout-name]
        [:label {:class "w-1/3"} "Exercises:"]
            (let [current-expanded (:expanded @form-state)]
                    (doall (for [[index exercise] (map-indexed vector exercises)]
                        (let [exercise-template (:exercise exercise)
                              sets (:sets exercise)]
                        ^{:key index}
                        [:div {:class "border-gray-200 bg-white rounded-md"}
                            [:div {:on-click #(swap! form-state (fn [current-form-state] 
                                (if (= index current-expanded) 
                                    (assoc current-form-state :expanded nil)
                                (assoc current-form-state :expanded index))))}
                                [:h2 {:class "text-lg font-bold"} (:name exercise-template)]]
                            (when (= current-expanded index) 
                                [:div {:class "flex flex-col gap-y-4 mt-2"}
                                    (doall (for [[j set] (map-indexed vector sets)]
                                        ^{:key j}
                                        [:div {:class "flex items-center gap-x-2"}
                                            (println (:tracking-type exercise-template))
                                            (println "foregin ")
                                            (println (:exercises @form-state))
                                            (println "index " index)
                                            (println "get-in" (get-in (:exercises @form-state) [index :sets j]))
                                            (case (keyword (:ident (:tracking-type exercise-template)))
                                                :workout.exercise/weightxreps (let [on-weight-change #(swap! form-state assoc-in [:exercises index :sets j :weight] %)
                                                                                    on-reps-change #(swap! form-state assoc-in [:exercises index :sets j :reps] %)]
                                                    [set-entry (:weight set) (:reps set) on-weight-change on-reps-change])
                                                :workout.exercise/time (let [on-time-change #(swap! form-state assoc-in % [:exercises index :sets j :time])]
                                                    [time-entry (:time set) on-time-change]))]))])]))))]))

(defn select-template []
    (cond 
                (nil? (:templates @app-state)) [:p "Loading..."]
                :else [:div {:class "grid grid-cols-1 items-center gap-y-4 mt-6"}
                        (for [[index template] (map-indexed vector (:templates @app-state))]
                            ^{:key index}
                            [list-button {:text (:name template) :icon #(fn [] [:span {:class "text-2xl"} (:symbol template)]) :variant :secondary :on-click #(update-template! (:id template))}])]))

(defn select-workout [day month year close-fn]
   (when (nil? (:todays-workouts @app-state))
        (update-workouts! day month year))
    (when (nil? (:templates @app-state))
        (update-templates!)) 
    (let [current-app-state @app-state
          current-form-state @form-state
          wrapped-close-fn #(do
            (reset! app-state {:todays-workouts nil :selected-workout nil :new-workout nil})
            (reset! form-state {:template nil :exercises [] :expanded nil})
            (close-fn))]
    (println "current-app-state " current-app-state)
    (println "current-form-state " current-form-state)
    [:div {:class "relative p-4 bg-gray-50 min-h-screen"} ;; Wrapper container
        ;; X Button pinned to the top-right
        [:button {:class "absolute top-2 right-2 p-2 text-gray-500 hover:text-red-500"
                 :on-click wrapped-close-fn}
            [x-sign]]
            (cond 
                (:new-workout current-app-state) [select-template]
                (nil? (:todays-workouts current-app-state)) [:p "Loading..."]
                :else (cond 
                    (= (count (:exercises current-form-state)) 0) [:div {:class "grid grid-cols-1 items-center gap-y-4 mt-6"}
                        (for [[index workout] (map-indexed vector (:todays-workouts current-app-state))]
                            ^{:key index}
                            [list-button {:subtext (format-time (:timestamp workout)) :icon #(fn [] [:span {:class "text-2xl"} (get-in workout [:template :symbol])]) :variant :secondary :text (get-in workout [:template :name]) :on-click #(swap! app-state assoc :selected-workout (:id workout)) :extra-classes "w-1/2"}])
                        [list-button {:text "Add Workout" :icon plus-sign :variant :primary :on-click #(swap! app-state assoc :new-workout true) :extra-classes "w-1/3"}]]
                    :else [workout-form (:selected-workout @app-state)]))]))