(ns workout-demo-frontend.config
    (:require [reagent.core :as r]
              [ajax.core :refer [GET]]))    

(defonce config (r/atom {:api_url "http://localhost:3000"})) ;; Default fallback

(defn fetch-config []
  (GET "/clojure-workout-tracker/config.json"
    {:handler      (fn [response]
                     (println "Loaded config.json:" response)
                     (let [api-url (get response "apiGatewayUrl")]
                        (if api-url
                            (do 
                            (reset! config {:api-url api-url})
                            (println "Config loaded:" @config))
                            (do
                            (println "Failed to load config.json, using default API URL")
                      (reset! config {:api-url "http://localhost:3000"})))))}))

(js/setTimeout fetch-config 0)

(defn get-api-url []
  (:api-url @config))