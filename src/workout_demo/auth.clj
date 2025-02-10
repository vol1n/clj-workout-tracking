(ns workout-demo.auth
  (:require [workout-demo.config :refer [get-config]]
            [clojure.java.io :as io])
  (:import [com.auth0.jwt JWT]
           [com.auth0.jwt.algorithms Algorithm]
           [java.util Date]))


(def expiration-time (* 60 60 1000))

(defn generate-jwt [user]

  (let [config (get-config)
        algorithm (Algorithm/HMAC256 (:jwt-secret config))]
    (-> (JWT/create)
        (.withSubject (:username user))
        (.withIssuedAt (Date.))
        (.withExpiresAt (Date. (+ (.getTime (Date.)) expiration-time)))
        (.sign algorithm))))

(defn authenticate [username password]
  (let [config (get-config)
        user (get (:users config) username)]
        (println "user " user)
        (println "users " (:users config))        
    (when (and user (= password (:password user)))
      (generate-jwt (assoc user :username username)))))

(defn verify-jwt [token]
  (try
    (let [config (get-config)
          algorithm (Algorithm/HMAC256 (:jwt-secret config))
          verifier  (-> (JWT/require algorithm) (.build))
          ^com.auth0.jwt.interfaces.DecodedJWT verified (.verify verifier token)]
        (println "Decoded JWT class:" (class verified))
        {:username (.getSubject verified)
         :role (.asString (.getClaim verified "role"))}) 
    (catch Exception e
      (println "JWT verification failed:" (.getMessage e))
      (.printStackTrace e)   ;; 🛠 Print full stack trace
      nil)))