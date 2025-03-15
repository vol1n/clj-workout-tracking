(ns workout-demo-frontend.auth
    (:require [reagent.core :as r]
              [clojure.string :as str]
              [workout-demo-frontend.config :refer [get-api-url]]
              [cljs.pprint :refer [pprint]]))

(def logged-in? (r/atom nil))

(defn get-token []
  (js/localStorage.getItem "jwt"))

(defn join-url [& parts]
  (println "parts " parts)
  (let [cleaned (map #(str/replace % #"(^/+|/+$)" "") parts)] 
    (str/join "/" cleaned)))

(defn decode-jwt [token]
  (try
    (let [payload (some-> token (str/split #"\.") second js/atob js/JSON.parse)]
      payload)
    (catch js/Error _ nil)))

(defn token-expired? []
  (let [token (get-token)
        decoded (decode-jwt token)]
    (when decoded
      (let [exp-time (* 1000 (:exp decoded)) 
            now (.getTime (js/Date.))]
        (> now exp-time)))))

(defn logout! []
  (js/localStorage.removeItem "auth-token")
  (reset! logged-in? nil))

;; Higher Order Function for API calls, automatically attach auth - since I already used GET and POST for
;; my API calls, I can just add api-call before them 
(defn api-call [method route opts]
  (let [token (get-token)
        headers (if token {"Authorization" (str "Bearer " token)} {})
        user-error-handler (:error-handler opts)
        default-error-handler (fn [{:keys [status response]}]
                                (if (= status 401)
                                  (do (js/console.warn "Unauthorized! Logging out.")
                                      (logout!))
                                  (when user-error-handler
                                    (user-error-handler {:status status :response response}))))
        full-opts (merge (dissoc opts :error-handler) {:headers headers :error-handler default-error-handler} )
        url (join-url (get-api-url) route)
        response (method url full-opts)] ;; Call custom handler if exists 
    response))

(defn api-call-no-auth [method route opts]
  (println (get-api-url))
  (let [user-error-handler (:error-handler opts)
        default-error-handler (fn [{:keys [status response]}]
                                  (when user-error-handler
                                    (user-error-handler {:status status :response response})))
        full-opts (merge (dissoc opts :error-handler) {:error-handler default-error-handler} )
        url (join-url (get-api-url) route)] ;; Call custom handler if exists
    (method url full-opts)))