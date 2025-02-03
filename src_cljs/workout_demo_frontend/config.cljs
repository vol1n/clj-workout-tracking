(ns workout-demo-frontend.config
    (:require [reagent.core :as r]
              [ajax.core :refer [GET]]))    

(defonce config (r/atom {:api_url "http://localhost:3000"})) ;; Default fallback

;; 🔹 Fetch `config.json` at runtime
(defn fetch-config []
  (GET "/config.json"
    {:handler      (fn [response]
                     (when (:apiGatewayUrl response)
                       (reset! config {:api_url (:apiGatewayUrl response)})
                       (println "Config loaded:" @config)))
     :error-handler (fn [_]
                      (println "Failed to load config.json, using default API URL")
                      (reset! config {:api_url "http://localhost:3000"}))}))

;; 🔹 Call this function on app start (ensures runtime execution)
(js/setTimeout fetch-config 0)