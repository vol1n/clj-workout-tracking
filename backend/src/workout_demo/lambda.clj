(ns workout-demo.lambda
    (:gen-class)
    (:require [fierycod.holy-lambda-ring-adapter.core :as hlra]
              [workout-demo.routes :refer [app]]
              [fierycod.holy-lambda.custom-runtime :as hl-runtime]
              [fierycod.holy-lambda.agent :as hl-agent]
              [workout-demo.config :refer [get-config]]
              [clojure.string]))


(def HttpApiProxyGateway (hlra/ring<->hl-middleware app))

(defn -main
  [& _]  ;; Ignore CLI args
  (let [handler-name "workout-demo.lambda.HttpApiProxyGateway"
        routes {"workout-demo.lambda.HttpApiProxyGateway" #'HttpApiProxyGateway}
        runtime-api-url# (System/getenv "AWS_LAMBDA_RUNTIME_API")]
    (println "[DEBUG] Using handler:" handler-name)
    (hl-agent/in-context
        (get-config))
    (if (= (System/getProperty "executor") "native-agent")
        (#'hl-agent/routes->reflective-call! routes) ;; Treat the function as a var to call even though it's private
        (while true
            (hl-runtime/next-iter
               runtime-api-url#
               handler-name
               routes
               false)))))