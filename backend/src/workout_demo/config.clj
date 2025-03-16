(ns workout-demo.config
  (:require [clojure.edn :as edn]
            [com.grzm.awyeah.client.api :as aws]
            [clojure.java.io :as io]))

;; Create AWS SSM client (singleton)
(def ssm-client (aws/client {:api :ssm}))

(defn load-local-config []
  (if-let [path (io/resource "config.edn")]  
    (edn/read-string (slurp path))  
    (throw (ex-info "❌ config.edn not found in classpath!" {}))))

(defn fetch-config-ssm []
  (let [param-name (System/getenv "CONFIG_PARAM_NAME")] ;; Read parameter name from env
    (when (nil? param-name)
      (throw (ex-info "❌ CONFIG_PARAM_NAME not set in environment variables!" {})))

    (let [response (aws/invoke ssm-client
                               {:op :GetParameter
                                :request {:Name param-name
                                          :WithDecryption true}})
          config-value (get-in response [:Parameter :Value])]
      (println "param-name" param-name)
      (println "response" response)
      (println "config-value" config-value)

      (if (nil? config-value)
        (throw (ex-info "❌ CONFIG_PARAM_NAME not found in SSM" {}))
        (edn/read-string config-value)))))

;; Lazy-load the config, fallback to local if AWS SSM fails
(defonce config
  (delay
    (try
      (fetch-config-ssm)
      (catch Exception e
        (println "⚠️  Error loading config from AWS SSM, falling back to local:" (.getMessage e))
        (try
          (load-local-config)
          (catch Exception e
            (println "❌ Error loading local config:" (.getMessage e))))))))

(defn get-config []
  @config)