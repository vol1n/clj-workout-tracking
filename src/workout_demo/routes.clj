(ns workout-demo.routes
    (:require [compojure.core :refer [GET POST defroutes routes]]
                        [ring.middleware.params :refer [wrap-params]]
                        [ring.util.response :refer [response status header]]
                        [workout-demo.handlers.workouts :refer [fetch-month-summary fetch-days-workouts log-workout]]
                        [workout-demo.handlers.templates :refer [create-template fetch-templates fetch-template]]
                        [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
                        [ring.middleware.cors :refer [wrap-cors]]
                        [clojure.string :as str]
                        [workout-demo.auth :refer [authenticate verify-jwt]]
                        [workout-demo.handlers.insights :refer [fetch-exercises fetch-progress]]))

(defn clean-keyword [kw]
  (if (keyword? kw)
    (-> kw name (str/replace #"workout\." "") keyword) ;; Remove namespace prefix
    kw))

(defn clean-response [m]
  (println "m " m)
  (cond
    (map? m) (into {} (map (fn [[k v]] [ (clean-keyword k) (clean-response v)]) m)) 
    (vector? m) (mapv clean-response m)  
    (seq? m) (map clean-response m)  
    :else m)) 

(defn unauthorized-response []
  (-> 
    (response {:error "Unauthorized"})
    (status 401)))

(defn add-cors-headers [response]
  (-> response
      (header "Access-Control-Allow-Origin" "*")  ;; Allow all origins
      (header "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS")
      (header "Access-Control-Allow-Headers" "Content-Type, Authorization")
      (header "Access-Control-Allow-Credentials" "true")))

(defroutes auth-routes
  (POST "/login" request 
    (let [body (:body request)
          token (authenticate (:username body) (:password body))]
      (println "TOKEN " token)
      (if (nil? token)
        (unauthorized-response)
      (->
       (response {:jwt token})
       (add-cors-headers))))))

(defn wrap-jwt-auth [handler]
  (println "wrap-jwt-auth")
  (fn [request]
    (println "request " request)
    (println (:headers request))
    (let [token (get-in request [:headers "authorization"])
        token (when token (second (re-find #"Bearer (.+)" token)))
        user  (when token (verify-jwt token))]
      (println "toked " token)
      (if user
        (handler (assoc request :user user))
        (unauthorized-response)))))



(defroutes app-routes 
      (POST "/templates" request (let [body (:body request)
                                       username (get-in request [:user :username])] 
        (create-template body username)
        (-> 
          (response {:message "Template created"})
          (add-cors-headers))))
      (GET "/templates" {{username :username} :user} 
        (-> 
          (response (clean-response (fetch-templates username)))
          (add-cors-headers)))
      (GET "/template" {{id "id"} :query-params
                        {username :username} :user}
          (-> 
            (response (clean-response (fetch-template (Long/parseLong id) username)))
            (add-cors-headers)))
      (GET "/summary" {{month "month" year "year"} :query-params
                       {username :username} :user} 
          (println "input " month year username)
          (-> 
            (response (clean-response (fetch-month-summary (Integer/parseInt month) (Integer/parseInt year) username)))
            (add-cors-headers)))
      (GET "/workouts" {{day "day" month "month" year "year"} :query-params
                        {username :username} :user}
        (-> 
          (response (clean-response (fetch-days-workouts (Integer/parseInt day) (Integer/parseInt month) (Integer/parseInt year) username)))
          (add-cors-headers)))
      (POST "/workouts" request 
        (let [workout (:body request)
              username (get-in request [:user :username])] 
          (log-workout workout username)
          (-> 
            (response {:message "Workout logged"})
            (add-cors-headers))))
      (GET "/exercises" {{username :username} :user} (-> 
          (response (clean-response (fetch-exercises username)))
          (add-cors-headers)))
      (GET "/progress" {{start-day "start-day" start-month "start-month" start-year "start-year" end-day "end-day" end-month "end-month" end-year "end-year" exercise "exercise"} :query-params
                        {username :username} :user} 
        (->
          (response (clean-response (fetch-progress username {:day (Integer/parseInt start-day) :month (Integer/parseInt start-month) :year (Integer/parseInt start-year)} {:day (Integer/parseInt end-day) :month (Integer/parseInt end-month) :year (Integer/parseInt end-year)} exercise)))
          (add-cors-headers))))

(defn wrap [routes]
  (-> 
    routes
    (wrap-params)
    (wrap-json-body {:keywords? true})
    (wrap-json-response)
    (wrap-cors 
      :access-control-allow-origin [#"http://localhost:3001"
                                    #"https://dimmin3f9flnh.cloudfront.net/"
                                    #"https://vol1n.dev"] ;; Allow requests from your frontend
      :access-control-allow-methods [:get :post :put :delete])))

(def app
  (-> 
    (routes
      auth-routes  
      (wrap-jwt-auth app-routes)) 
    wrap))
