(ns workout-demo-frontend.util.templates
    (:require [ajax.core :refer [GET]]
              [workout-demo-frontend.auth :refer [api-call]]))

(defn fetch-templates [on-success]
    (api-call GET "/templates"
       {:response-format :json
        :keywords? true ;; Ensure response keys are keywordized
        :handler on-success ;; Callbacksa
        :error-handler #(js/console.error "Failed to fetch templates" %)}))

(defn fetch-template [id on-success]
    (api-call GET "/template"
              {:params {:id id}
               :response-format :json
               :keywords? true ;; Ensure response keys are keywordized
               :handler on-success ;; Callbacksa
               :error-handler #(js/console.error "Failed to fetch template" %)}))