(ns workout-demo.lambda
    (:gen-class)
    (:require [fierycod.holy-lambda-ring-adapter.core :as hlra]
              [fierycod.holy-lambda.core :as h]
              [workout-demo.routes :refer [handler app]]
              ))

(defn api-gw->ring [event]
  "Converts an API Gateway event into a Ring request."
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
  "Converts a Ring response back to API Gateway format."
  {:statusCode (:status ring-response 200)
   :headers (:headers ring-response {})
   :body (if (:body ring-response)
           (slurp (:body ring-response))
           "")})

(defn HttpApiProxyGateway [request]

  ((hlra/ring<->hl-middleware handler)) request)

(h/entrypoint [HttpApiProxyGateway])

