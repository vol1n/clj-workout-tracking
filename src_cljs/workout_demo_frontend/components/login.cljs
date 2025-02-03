(ns workout-demo-frontend.components.login
    (:require [reagent.core :as r]
              [ajax.core :refer [POST]]
              [workout-demo-frontend.auth :refer [get-token decode-jwt token-expired? api-call-no-auth]]))

(def login-form-state (r/atom {:username "" :password "" :error nil}))

(defn post-login [on-success on-error]
    (api-call-no-auth (POST "/login"
       {:params @login-form-state
        :format :json
        :response-format :json
        :keywords? true ;; Ensure response keys are keywordized
        :handler on-success
        :error-handler on-error})))

(defn login [logged-in?]
    (when (and (get-token) (decode-jwt (get-token)) (not (token-expired?)))
        (reset! logged-in? true))
    [:div {:class "flex flex-col items-center justify-center h-1/2 gap-y-4 border-2 border-gray-200 rounded-md p-4"}
        [:h1 {:class "text-2xl font-bold"} "Login"]
        [:input {:class "border-2 border-gray-200 rounded-md" :type "text" :placeholder "Username" :value (:username @login-form-state) :on-change #(swap! login-form-state assoc :username (.. % -target -value))}]
        [:input {:class "border-2 border-gray-200 rounded-md" :type "password" :placeholder "Password" :value (:password @login-form-state) :on-change #(swap! login-form-state assoc :password (.. % -target -value))}]
        (when (:error @login-form-state) [:p {:class "text-red-500 text-sm"} (:error @login-form-state)])
        [:button {:class "p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-1/3"
                  :on-click #(post-login 
                    (fn [response] 
                        (println "response " response)
                        (js/localStorage.setItem "jwt" (:jwt response))
                        (reset! logged-in? true))
                    (fn [] (swap! login-form-state assoc :error "Username or password is incorrect")))}
            [:span {:class "text-2xl font-bold"} "Login"]]])
