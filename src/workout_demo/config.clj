(ns workout-demo.config
  (:require [aero.core :refer [read-config]]
            [cheshire.core :as json]  ;; ✅ Parse JSON from AWS
            [clojure.java.shell :refer [sh]]
            [clojure.java.io :as io]))

(defn load-local-config []
  (if-let [resource (io/resource "config.edn")]
    (read-config resource)
    (throw (ex-info "❌ config.edn not found!" {}))))

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
          (load-local-config)))
      (do
        (println "Failed to load SSM config, using local config:" err)
        (load-local-config)))))

(defonce config (try
                    (get-ssm-config)
                    (catch Exception e
                      (println "Error loading config from SSM, falling back to local:" (.getMessage e))
                      (load-local-config))))

(defn get-config []
  @config)