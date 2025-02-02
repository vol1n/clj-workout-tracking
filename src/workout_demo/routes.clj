(ns workout-demo.routes
    (:require [compojure.core :refer [GET POST defroutes routes]]
                        [ring.middleware.params :refer [wrap-params]]
                        [ring.util.response :refer [response status]]
                        [workout-demo.handlers.workouts :refer [fetch-month-summary fetch-days-workouts log-workout]]
                        [workout-demo.handlers.templates :refer [create-template fetch-templates fetch-template]]
                        [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
                        [ring.middleware.cors :refer [wrap-cors]]
                        [clojure.string :as str]
                        [workout-demo.auth :refer [authenticate verify-jwt]]
                        [aero.core :refer [read-config]]
                        [clojure.java.io :as io]))

(def config (read-config (io/resource "config.edn")))                

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

(defroutes auth-routes
  (POST "/login" request 
    (let [body (:body request)
          token (authenticate (:username body) (:password body))]
      (println "TOKEN " token)
      (if (nil? token)
        (unauthorized-response)
     (response {:jwt token})))))



(defn wrap-jwt-auth [handler]
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
        (response {:message "Template created"})))
      (GET "/templates" {{username :username} :user} (response (clean-response (fetch-templates username))))
      (GET "/template" {{id "id"} :query-params
                        {username :username} :user}
          (response (clean-response (fetch-template (Long/parseLong id) username))))
      (GET "/summary" {{month "month" year "year"} :query-params
                       {username :username} :user} 
          (println "input " month year username)
          (response (clean-response (fetch-month-summary (Integer/parseInt month) (Integer/parseInt year) username))))
      (GET "/workouts" {{day "day" month "month" year "year"} :query-params
                        {username :username} :user}
        (response (clean-response (fetch-days-workouts (Integer/parseInt day) (Integer/parseInt month) (Integer/parseInt year) username))))
      (POST "/workouts" request 
        (let [workout (:body request)
              username (get-in request [:user :username])] 
          (log-workout workout username)
          (response {:message "Workout logged"}))))

(defn wrap [routes]
  (-> 
    routes
    (wrap-params)
    (wrap-json-body {:keywords? true})
    (wrap-json-response)
    (wrap-cors 
      :access-control-allow-origin [#"http://localhost:3001"] ;; Allow requests from your frontend
      :access-control-allow-methods [:get :post :put :delete])))

(def app
  (-> 
    (routes
      auth-routes  ;; ✅ Keep raw auth routes
      (wrap-jwt-auth app-routes)) ;; ✅ Wrap JWT auth for protected routes
    wrap)) ;; ✅ Apply general middleware after composing routes