(ns workout-demo.lambda
    (:gen-class)
    (:require [fierycod.holy-lambda-ring-adapter.core :as hlra]
              [fierycod.holy-lambda.core :as h]
              [workout-demo.routes :refer [app]]
              [fierycod.holy-lambda.custom-runtime :as hl-runtime]))

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
        routes {"workout-demo.lambda.HttpApiProxyGateway" #'HttpApiProxyGateway}] 
    (println "[DEBUG] Using handler:" handler-name)
    (while true 
        (hl-runtime/next-iter
           "localhost:9001"
           HttpApiProxyGateway
           routes
           false))))