(ns workout-demo-frontend.components.tabs
    (:require [reagent.core :as r]))

(def tabs-list [{:id :insights :label "📈"}
           {:id :calendar :label "📅"}
           {:id :settings :label "⚙️"}])

(def current-tab (r/atom :calendar))

(defn tabs []
    (let [selected @current-tab]
    [:div {:class "fixed bottom-0 flex items-center w-full bg-white border-t border-gray-200"}
        (for [tab tabs-list]
            ^{:key (:id tab)}
            [:button {:class (if (= (:id tab) selected)
                             "flex items-center justify-center w-full h-16 bg-gray-100 text-blue-500" ;; Highlighted tab
                             "flex items-center justify-center w-full h-16 hover:bg-gray-200 text-gray-500")
                :on-click #(do
                            (reset! current-tab (:id tab))
                            (println "New current tab:" @current-tab))}
                [:span {:class "text-6xl"} (:label tab)]])]))