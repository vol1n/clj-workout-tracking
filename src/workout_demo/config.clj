(ns workout-demo.config
  (:require [aero.core :refer [read-config]]
            [clojure.java.io :as io])
  (:import [com.amazonaws.services.simplesystemsmanagement AWSSimpleSystemsManagementClientBuilder]
           [com.amazonaws.services.simplesystemsmanagement.model GetParameterRequest]))

(defn load-local-config []
  (if-let [resource (io/resource "config.edn")]
    (read-config resource)
    (throw (ex-info "❌ config.edn not found!" {})))) 


(defn fetch-config-ssm []
  (let [ssm-client (-> (AWSSimpleSystemsManagementClientBuilder/defaultClient))
        param-name (System/getenv "CONFIG_PARAM_NAME") ;; Read parameter name from env
        request (doto (GetParameterRequest.)
                  (.setName param-name)
                  (.setWithDecryption true))
        response (.getParameter ssm-client request)]
    (.getValue (.getParameter response))))

(defonce config (delay (try
                    (fetch-config-ssm)
                    (catch Exception e
                      (println "Error loading config from env, falling back to local:" (.getMessage e))
                      (load-local-config)))))

(defn get-config []
  @config)