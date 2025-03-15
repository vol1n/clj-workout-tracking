(ns workout-demo.lambda
    (:gen-class)
    (:require [fierycod.holy-lambda-ring-adapter.core :as hlra]
              [workout-demo.routes :refer [app]]
              [fierycod.holy-lambda.custom-runtime :as hl-runtime]
              [fierycod.holy-lambda.agent :as hl-agent]
              [workout-demo.config :refer [get-config]]
              [clojure.string]))

(defn api-gw->ring [event]
  (let [headers (get event "headers" {})
        body (get event "body" nil)
        query-params (get event "queryStringParameters" {})
        request-method (keyword (clojure.string/lower-case (get event "httpMethod" "get")))
        uri (get event "path" "/")]
    {:server-port 443
     :server-name "api-gateway"
     :remote-addr "0.0.0.0"
     :uri uri
     :query-string (when query-params (clojure.string/join "&" (map (fn [[k v]] (str k "=" v)) query-params)))
     :headers (println );;(keywordize-\ headers)
     :request-method request-method
     :body (when body (java.io.ByteArrayInputStream. (.getBytes body "UTF-8")))}))

(defn ring->api-gw [ring-response]
  {:statusCode (:status ring-response 200)
   :headers (:headers ring-response {})
   :body (if (:body ring-response)
           (slurp (:body ring-response))
           "")})

;; (defn HttpApiProxyGateway [request]
;;   ((hlra/ring<->hl-middleware app) request))


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