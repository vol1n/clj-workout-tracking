(ns workout-demo-frontend.components.templates
    (:require [reagent.core :as r]
              [ajax.core :refer [POST]]
              [workout-demo-frontend.components.list-button :refer [list-button]]
              [workout-demo-frontend.util.templates :refer [fetch-templates fetch-template]]
              [workout-demo-frontend.components.icons :refer [plus-sign x-sign check-mark]]
              [workout-demo-frontend.auth :refer [api-call]]))

(def settings-state (r/atom {
    :templates nil ;; the templates to choose from
    :selected-template nil ;; id or nil
    :new-template nil 
}))

(def form-data (r/atom {
    :template nil ;; id or nil
    :name nil
    :symbol nil
    :exercises [] ;; the actual form data - load from template on template selection 
    :expanded nil ;; index of expanded exercise
    :errors {}}))

(defn form-valid? []
  (let [{:keys [name symbol exercises]} @form-data
        invalid-symbol (or (nil? symbol) (not (re-matches #".{1,2}" symbol)))
        invalid-name (or (nil? name) (empty? name)) 
        invalid-exercises (mapv #(or (if (< (:num-sets %) 1) {:num-sets true} nil) (if (= "" (:name %)) {:name true} nil)) exercises) 
        errors {:name invalid-name
                :symbol invalid-symbol
                :exercises (map-indexed (fn [i err] (when err {i err})) invalid-exercises)}]
    (swap! form-data assoc :errors errors)
    (not-any? identity 
        (mapv 
            #(if (seq? %)
                (println "(any? %) " (any? %))
            (println "(identity %) " (identity %))) 
        (vals errors)))))


(defn update-templates []
    (let [on-success #(swap! settings-state assoc :templates %)]
        (fetch-templates on-success)))

(defn update-template [id]
    (let [on-success #(do 
        (swap! settings-state (fn [prev] (assoc prev :selected-template id)))
        (swap! form-data (fn [prev] (assoc prev :template (:id %) :exercises (vec (:exercises %)) :name (:name %) :symbol (:symbol %)))))]
        (fetch-template id on-success)))

(defn save-template [on-success]
    (let [current-form-state @form-data
          get-tracking-type-kw #(get % :tracking-type)
          get-tracking-type-str #(str (name (get-tracking-type-kw %)))
          add-ns #(if (not (#{"workout.exercise/weightxreps" "workout.exercise/time"} %)) (str "workout.exercise/" %) %)
          data (-> current-form-state
                   (dissoc :expanded)
                   (assoc :id (:template current-form-state) :exercises (mapv #(assoc % :num-sets (js/parseInt (:num-sets %)) :tracking-type (add-ns (get-tracking-type-str %))) (:exercises current-form-state)))
                   (dissoc :template))]
        (when (form-valid?)
            (api-call POST "/templates"
                {:params data
                 :format :json
                 :response-format :json
                 :keywords? true 
                 :handler #(do
                             (update-templates)
                             (when on-success (on-success)))
                 :error-handler #(js/console.error "Failed to add template" %)}))))

(defn new-template []
    (swap! settings-state assoc :new-template true))

(defn remove-at [v i]
  (vec (concat (subvec v 0 i) (subvec v (inc i)))))

(defn remove-exercise [index]
    (swap! form-data assoc :exercises (vec (remove-at (:exercises @form-data) index))))

(defn add-exercise []
    (swap! form-data assoc :exercises (conj (:exercises @form-data) {:name "New exercise" :order (inc (count (:exercises @form-data))) :tracking-type :workout.exercise/weightxreps :num-sets 1})))

(defn template-editor [close-fn]
    (let [data (:exercises @form-data)
          name (:name @form-data)
          symbol (:symbol @form-data)
          errors (:errors @form-data)]
      [:div
       [:div {:class "flex items-center gap-x-4"}]
       [:input {:class (str "text-2xl font-bold w-1/8 border-2 border-gray-100 bg-white rounded-md" (when (:symbol errors) " border-red-500")) :value symbol :on-change #(swap! form-data assoc :symbol (-> % .-target .-value))}]
       [:input {:class (str "text-2xl font-bold border-2 border-gray-100 bg-white rounded-md" (when (:name errors) " border-red-500")) :value name :on-change #(swap! form-data assoc :name (-> % .-target .-value))}]
       [:button {:class "absolute top-2 right-2 p-2 text-gray-500 hover:text-red-500"
                 :on-click close-fn}
        [x-sign]]
       [:div {:class "grid grid-cols-1 items-center gap-y-4 mt-6"}
        (doall (for [[index exercise] (map-indexed vector data)]
                 (let [tracking-type (keyword (:tracking-type exercise))]
                   ^{:key (str "exercise" index)}
                   [:div {:class "flex flex-row justify-between items-center rounded-md bg-gray-50 border-gray-100"}
                    [:input {:class (str "border-2 border-gray-100 bg-white rounded-md text-lg font-bold" (when (get-in errors [:exercises index :name]) " border-red-500")) :value (:name exercise) :on-change #(swap! form-data assoc-in [:exercises index :name] (-> % .-target .-value))}]
                    [:select {:value tracking-type :on-change #(swap! form-data assoc-in [:exercises index :tracking-type] (-> % .-target .-value))}
                     ^{:key "weightxreps"} [:option {:value :workout.exercise/weightxreps} "Weight x Reps"]
                     ^{:key "time"} [:option {:value :workout.exercise/time} "Time"]]
                    [:input {:class (str "border-2 border-gray-100 bg-white rounded-md text-lg font-bold" (when (get-in errors [:exercises index :num-sets]) " border-red-500")) :type "number" :value (:num-sets exercise) :on-change #(swap! form-data assoc-in [:exercises index :num-sets] (-> % .-target .-value))}]
                    [:button {:class "flex items-center gap-2 p-2 hover:bg-red-700 rounded-full bg-red-500 transition duration-200 text-white" :on-click #(remove-exercise index)} [x-sign]]])))
        ^{:key "add-exercise"} [list-button {:text "Add Exercise" :variant :primary :icon plus-sign :on-click add-exercise :extra-classes "w-1/3"}]
        ^{:key "save-template"} [list-button {:text "Save Template" :variant :primary :icon check-mark :on-click #(save-template close-fn) :extra-classes "w-1/3 bg-green-300 hover:bg-green-400"}]]]))
                    

(defn select-template []
    (when (nil? (:templates @settings-state))
        (update-templates))
    (let [close-fn #(do
                      (reset! form-data {:template nil :exercises [] :expanded nil})
                      (reset! settings-state {:templates nil :selected-template nil}))
          current-settings-state @settings-state]
      [:div {:class "relative p-4 bg-gray-50 min-h-screen"} ;; Wrapper container
       (cond
         (nil? (:templates current-settings-state)) [:p "Loading..."]
         :else (cond
                 (and (nil? (:selected-template current-settings-state)) (nil? (:new-template current-settings-state)))
                 [:div {:class "grid grid-cols-1 items-center gap-y-4 mt-6"}
                  (for [[index template] (map-indexed vector (:templates current-settings-state))]
                    ^{:key (str "template" index)}
                    [list-button {:text (:name template) :icon #(fn [] [:span {:class "text-2xl"} (:symbol template)]) :variant :secondary :on-click #(update-template (:id template))}])
                  [list-button {:text "Add Template" :icon plus-sign :variant :primary :on-click new-template :extra-classes "w-1/3"}]]
                 :else (template-editor close-fn)))]))