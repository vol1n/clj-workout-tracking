(ns workout-demo-frontend.core
  (:require [reagent.dom.client :as rdom]
  [workout-demo-frontend.components.calendar :refer [calendar]]
  [workout-demo-frontend.components.tabs :refer [tabs, current-tab]]
  [workout-demo-frontend.components.templates :refer [select-template]]
  [workout-demo-frontend.components.login :refer [login]]
  [workout-demo-frontend.auth :refer [logged-in?]]))

(defn app []
  [:div
   [:div {:class "mt-10 ml-20 mr-20"}
   (cond
     (nil? @logged-in?) [login logged-in?]
     (= @current-tab :insights) "Insights"
     (= @current-tab :calendar) [calendar]
     (= @current-tab :settings) [select-template]
     :else "Default")]
   [tabs]])

(defn init []
  (let [root (rdom/create-root (.getElementById js/document "app"))]
    (rdom/render root [app])))