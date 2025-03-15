(ns workout-demo.util
  (:require [clojure.string :as str]
            [cheshire.core :as json])
  (:import [java.net URLDecoder]))

(defn url-decode
  [s]
  (println "url-decoding" s)
  (let [decoded (URLDecoder/decode s "UTF-8")]
    (println "decoded" decoded)
    decoded))

(defn response
  "Creates a basic HTTP response."
  ([body] (response body 200))
  ([body status]
   {:status status
    :body body}))

(defn json-response
  "Creates a JSON response."
  [data]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})

(defn status
  "Updates the HTTP status code of a response."
  [resp status-code]
  (assoc resp :status status-code))

(defn header
  "Adds a header to an HTTP response."
  [resp key value]
  (assoc-in resp [:headers key] value))


(defn parse-query-params
  "Parses a query string into a Clojure map."
  [query-string]
  (println "query-string" query-string)
  (when query-string
    (into {} (map #(let [[k v] (str/split % #"=")]
                     [k (url-decode v)])
                  (str/split query-string #"&")))))

(defn wrap-params
  "Middleware to parse query params and add them to the request map."
  [handler]
  (fn [request] 
    (println "wrap-params")
    (let [params (parse-query-params (:query-string request))]
      (println "params" params)
      (handler (assoc request :query-params params)))))

(defn parse-json-body
  "Parses the JSON body of an HTTP request."
  [body]
  (when body
    (json/parse-string (slurp body) true)))

(defn wrap-json-body
  "Middleware that parses JSON request bodies."
  [handler]
  (fn [request]
    (let [json-body (parse-json-body (:body request))]
      (handler (assoc request :body json-body)))))

(defn wrap-json-response
  "Middleware that converts response bodies to JSON."
  [handler]
  (fn [request]
    (let [response (handler request)]
      (if (not (string? (:body response)))
        (assoc response
               :headers (merge (:headers response) {"Content-Type" "application/json"})
               :body (json/generate-string (:body response)))
        response))))

(defn wrap-cors
  "Middleware that adds CORS headers to the response."
  [handler] 
  (fn [request]
    (println "in cors wrapper")
    (let [response (handler request)
          result (assoc response :headers
                        (merge (:headers response)
                               {"Access-Control-Allow-Origin"  "*"
                                "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
                                "Access-Control-Allow-Headers" "Content-Type, Authorization"}))]
      (println "result" result)
      result)))