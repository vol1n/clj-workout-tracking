(ns workout-demo.auth
  (:require [workout-demo.config :refer [get-config]]
            [clojure.java.io :as io])
  (:import [com.auth0.jwt JWT]
           [com.auth0.jwt.algorithms Algorithm]
           [java.util Date]))


(def config (get-config))
(def jwt-secret (:jwt-secret config))
(def users (:users config))
(def expiration-time (* 60 60 1000))

(defn generate-jwt [user]
  (let [algorithm (Algorithm/HMAC256 jwt-secret)]
    (-> (JWT/create)
        (.withSubject (:username user))
        (.withIssuedAt (Date.))
        (.withExpiresAt (Date. (+ (.getTime (Date.)) expiration-time)))
        (.sign algorithm))))

(defn authenticate [username password]
  (let [user (get users username)]
    (when (and user (= password (:password user)))
      (generate-jwt (assoc user :username username)))))

(defn verify-jwt [token]
  (try
    (let [algorithm (Algorithm/HMAC256 jwt-secret)
          verifier  (-> (JWT/require algorithm) (.build))
          decoded   (.verify verifier token)]
      {:username (.getSubject decoded)
       :role (.asString (.getClaim decoded "role"))}) 
    (catch Exception _ nil))) 