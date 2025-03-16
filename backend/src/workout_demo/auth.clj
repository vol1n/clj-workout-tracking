(ns workout-demo.auth
  (:require [workout-demo.config :refer [get-config]]
            [babashka.pods :as pods]
            [workout-demo.db.schema :refer [setup-db get-conn]])
  (:import [java.time Instant Duration ZoneId]))
(pods/load-pod 'org.babashka/buddy "0.3.4")
(require '[pod.babashka.buddy.sign.jwt :as jwt])
(def expiration-time (* 60 60 1000))

(defn- create-jwt [claims secret]
  (jwt/sign (merge claims {:iss "workout-demo"}) secret {:alg :hs256}))

(defn generate-jwt [user]
  (println "generate-jwt")
  (let [config (get-config)
        secret (:jwt-secret config)
        claims {:user user
                :iat (.toEpochMilli (Instant/now))
                :exp (.toEpochMilli (.plus (Instant/now) (Duration/ofMillis expiration-time)))}]
    (create-jwt claims secret)))


(defn instant-today? [^Instant instant]
  (if instant
  (let [zone-id (ZoneId/of "UTC")
        right-now (Instant/now)
        today (.toLocalDate (.atZone right-now zone-id))
        instant-date (.toLocalDate (.atZone instant zone-id))]
    (= today instant-date))
  false))

(defn authenticate [username password]
  (println "authenticate" username password)
  (let [config (get-config)
        user (get (:users config) username)] 
    (println "user " user)
    (when (and user (= password (:password user)))
      (if (= username "demo")
        (setup-db (get-conn))
        (setup-db (get-conn) false))
      (generate-jwt (assoc user :username username)))))

(defn verify-jwt [token]
  (try
    (let [config (get-config)
          secret (:jwt-secret config)
          payload (jwt/unsign token secret {:alg :hs256})]
        {:username (get-in payload [:user :username])
         :role (get-in payload [:user :role])}) 
    (catch Exception e
      (println "JWT verification failed:" (.getMessage e))
      (.printStackTrace e) 
      nil)))