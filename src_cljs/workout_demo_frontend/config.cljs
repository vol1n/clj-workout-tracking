(ns workout-demo-frontend.config
    (:require [reagent.core :as r]
              [ajax.core :refer [GET]]))    

(defonce config (r/atom {:api_url "http://localhost:3000"})) ;; Default fallback

(defn fetch-config []
  (GET "/config.json"
    {:handler      (fn [response]
                     (when (:apiGatewayUrl response)
                       (reset! config {:api_url (:apiGatewayUrl response)})
                       (println "Config loaded:" @config)))
     :error-handler (fn [_]
                      (println "Failed to load config.json, using default API URL")
                      (reset! config {:api_url "http://localhost:3000"}))}))

(js/setTimeout fetch-config 0)

(defn get-api-url []
  (:api_url @config))