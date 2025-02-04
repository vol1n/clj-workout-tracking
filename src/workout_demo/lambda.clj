(ns workout-demo.lambda
    (:gen-class)
    (:require [fierycod.holy-lambda-ring-adapter.core :as hlra]
              [fierycod.holy-lambda.core :as h]
              [workout-demo.routes :refer [app]]))

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

(def allowed-origins ["https://vol1n.dev" "https://dimmin3f9flnh.cloudfront.net" "http://localhost:3001"])

(defn cors-response [event]
  (let [origin (get-in event [:headers "origin"] "unknown-origin")]
    (println "CORS request from:" origin)
    (if (contains? allowed-origins origin)
      {:statusCode 200
       :headers {"Access-Control-Allow-Origin" origin
                 "Access-Control-Allow-Methods" "GET,POST,PUT,DELETE,OPTIONS"
                 "Access-Control-Allow-Headers" "Content-Type,Authorization"
                 "Access-Control-Allow-Credentials" "true"}
       :body ""}
      (do
        (println "Blocked CORS request from unauthorized origin:" origin)
        {:statusCode 403
         :headers {"Content-Type" "application/json"}
         :body "{\"error\":\"CORS policy does not allow this origin.\"}"}))))

;; (defn HttpApiProxyGateway [request]
;;   ((hlra/ring<->hl-middleware app) request))

(defn lambda-handler [request]
    (println "Request:" request)
    (let [payload (:lambda request)
          event (:event payload)]
        (println "Payload:" payload)
        (println "Event:" event)
        (if (= "OPTIONS" (:httpMethod event))
            (cors-response event)  ;; Return CORS headers for OPTIONS requests
        (app event))))

(def HttpApiProxyGateway (hlra/ring<->hl-middleware lambda-handler))

(h/entrypoint [#'HttpApiProxyGateway])

