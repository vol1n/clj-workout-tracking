(ns workout-demo.config
  (:require [aero.core :refer [read-config]]
            [clojure.java.io :as io]
            [clojure.edn :as edn])
  (:import [software.amazon.awssdk.services.ssm SsmClient]
           [software.amazon.awssdk.services.ssm.model GetParameterRequest]))

(defn load-local-config []
  (if-let [resource (io/resource "config.edn")]
    (read-config resource)
    (throw (ex-info "❌ config.edn not found!" {})))) 

(defn fetch-config-ssm []
  (let [ssm-client (SsmClient/create)  ;; Create SSM client
        param-name (System/getenv "CONFIG_PARAM_NAME") ;; Read parameter name from env
        ^software.amazon.awssdk.services.ssm.model.GetParameterRequest request (->
            (GetParameterRequest/builder)
            (.name param-name)
            (.withDecryption true)
            (.build))
        response (.getParameter ssm-client request)
        config (some-> response
                   (.parameter)
                   (.value))]
    (if (nil? config)
        (throw (ex-info "❌ CONFIG_PARAM_NAME not found in SSM" {}))
    (edn/read-string config))))

(defonce config (delay (try
                    (fetch-config-ssm)
                    (catch Exception e
                      (println "Error loading config from env, falling back to local:" (.getMessage e))
                      (.printStackTrace e)
                      (try 
                        (load-local-config)
                        (catch Exception e
                          (println "Error loading config from local:" (.getMessage e))))))))

(defn get-config []
  @config)