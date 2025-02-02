(ns workout-demo.config
  (:require [aero.core :refer [read-config]]
            [cheshire.core :as json]  ;; ✅ Parse JSON from AWS
            [clojure.java.shell :refer [sh]]
            [clojure.java.io :as io]))

(def local-config (read-config (io/resource "config.edn")))

(defonce app-config (atom nil))

(defn get-ssm-config []
  (let [{:keys [exit out err]} (sh "aws" "ssm" "get-parameter"
                                   "--name" "/workout-demo/config"
                                   "--with-decryption"
                                   "--query" "Parameter.Value"
                                   "--output" "json")]
    (if (zero? exit)
      (try
        (read-string (json/parse-string out true))  ;; Convert JSON to EDN
        (catch Exception e
          (println "Error parsing AWS SSM config, using local config:" (.getMessage e))
          local-config))
      (do
        (println "Failed to load SSM config, using local config:" err)
        local-config))))

(def config (try
              (get-ssm-config)
              (catch Exception e
                (println "⚠️ Error loading config from SSM, using local fallback:" (.getMessage e))
                local-config)))

(defn get-config []
  (when (nil? @app-config)
    (reset! app-config config))
  @app-config)