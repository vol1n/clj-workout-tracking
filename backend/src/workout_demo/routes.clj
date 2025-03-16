(ns workout-demo.routes
    (:require [workout-demo.util :as util] 
              [workout-demo.handlers.workouts :refer [fetch-month-summary fetch-days-workouts log-workout]]
              [workout-demo.handlers.templates :refer [create-template fetch-templates fetch-template]] 
              [clojure.string :as str]
              [workout-demo.auth :refer [authenticate verify-jwt]]
              [workout-demo.handlers.insights :refer [fetch-exercises fetch-progress]]))

(defn clean-keyword [kw]
  (if (keyword? kw)
    (-> kw name (str/replace #"workout\." "") keyword) ;; Remove namespace prefix
    kw))

(defn clean-response [m]
  (cond
    (map? m) (into {} (map (fn [[k v]] [ (clean-keyword k) (clean-response v)]) m)) 
    (coll? m) (mapv clean-response m) 
    :else m)) 

(defn unauthorized-response []
  (-> 
    (util/response {:error "Unauthorized"})
    (util/status 401)))

(defn add-cors-headers [response]
  (-> response
      (util/header "Access-Control-Allow-Origin" "*")  ;; Allow all origins
      (util/header "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS")
      (util/header "Access-Control-Allow-Headers" "Content-Type, Authorization")
      (util/header "Access-Control-Allow-Credentials" "true")))

(def auth-routes 
  {[:post "/login"] (fn [request]
                      (let [body (:body request)
                            token (authenticate (:username body) (:password body))]
                        (if (nil? token)
                          (unauthorized-response)
                          (->
                           (util/response {:jwt token})
                           (add-cors-headers)))))})

(defn wrap-jwt-auth [handler]
  (fn [request]
    (let [token-string (get-in request [:headers "authorization"])
        token (when token-string (second (re-find #"Bearer (.+)" token-string)))
        user  (when token (verify-jwt token))]
      (if user
        (handler (assoc request :user user))
        (unauthorized-response)))))


(def app-routes 
      {[:post "/templates"] (fn [request]
                             (let [body (:body request)
                                   username (get-in request [:user :username])]
                               (create-template body username)
                               (util/response {:message "Template created"})))
       [:get "/templates"] (fn [{{username :username} :user}]
                             (util/response (clean-response (fetch-templates username))))
       [:get "/template"] (fn [{{id "id"} :query-params
                                {username :username} :user}]
                             (util/response (clean-response (fetch-template id username))))
       [:get "/summary"] (fn [{{month "month" year "year"} :query-params
                               {username :username} :user}]
                            (util/response (clean-response (fetch-month-summary (Integer/parseInt month) (Integer/parseInt year) username))))
       [:get "/workouts"] (fn [{{day "day" month "month" year "year"} :query-params
                                {username :username} :user}]
                            (util/response (clean-response (fetch-days-workouts (Integer/parseInt day) (Integer/parseInt month) (Integer/parseInt year) username))))
       [:post "/workouts"] (fn [request]
                             (let [workout (:body request)
                                   username (get-in request [:user :username])]
                               (util/response (clean-response (log-workout workout username)))))
       [:get "/exercises"] (fn [{{username :username} :user}] 
                             (util/response (clean-response (fetch-exercises username))))
       [:get "/progress"] (fn [{{start-day "start-day"
                                 start-month "start-month"
                                 start-year "start-year"
                                 end-day "end-day"
                                 end-month "end-month"
                                 end-year "end-year"
                                 exercise "exercise"} :query-params
                                {username :username} :user}]
                            (util/response
                             (clean-response
                              (fetch-progress username
                                              {:day (Integer/parseInt start-day)
                                               :month (Integer/parseInt start-month)
                                               :year (Integer/parseInt start-year)}
                                              {:day (Integer/parseInt end-day)
                                               :month (Integer/parseInt end-month)
                                               :year (Integer/parseInt end-year)} exercise))))})

(defn wrap [routes]
  (-> 
    routes
    (util/wrap-params)
    (util/wrap-json-body)
    (util/wrap-json-response)
    (util/wrap-cors)))

(defn match-route [req routes]
  (let [route-key [(:request-method req) (:uri req)]]
    (if-let [handler (get routes route-key)]
      (handler req)
      {:status 404 :body "Not Found"})))

(def app-handler 
  (->
   (fn [req] (match-route req app-routes))
   (wrap)
   (wrap-jwt-auth)))

(def auth-handler
  (->
   (fn [req] 
     (match-route req auth-routes))
   (wrap)))

(defn app [req]
  (if (= (:request-method req) :options)
    ((util/wrap-cors (fn [_request] (util/response {}))) req)
    (let [route-key [(:request-method req) (:uri req)]]
      (if (contains? app-routes route-key)
        (app-handler req)
        (if (contains? auth-routes route-key)
          (auth-handler req)
          {:status 404 :body "Not Found"})))))
