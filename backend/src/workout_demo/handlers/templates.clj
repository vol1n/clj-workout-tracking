(ns workout-demo.handlers.templates
    (:require [workout-demo.db.service :refer [upsert-template get-templates get-template-full]]
              [clojure.spec.alpha :as s]))

(s/def ::name string?)
(s/def ::num-sets int?)
(s/def ::tracking-type #(contains? #{:workout.exercise/weightxreps :workout.exercise/time} %))
(s/def ::exercise (s/keys :req-un [::name  ::num-sets ::tracking-type]))
(s/def ::id string?)

(s/def ::symbol string?)
(s/def ::exercises (s/coll-of ::exercise))
(s/def ::template (s/keys :req-un [::name ::exercises ::symbol] :opt [::id]))

(defn create-template [template username]
    (println "templ4te " template)
    (let [parsed-template (assoc template :exercises (mapv #(assoc % :tracking-type (keyword (:tracking-type %))) (:exercises template)))]
    (println "templ4te " parsed-template)
    (println (s/explain-data ::template parsed-template))
    (assert (s/valid? ::template parsed-template))
    (upsert-template parsed-template username)))

(defn fetch-template [id username]
  (println "im in fetch template")
    (let [template (get-template-full id username)]
        (println "templ4te " template)
        template))

(defn fetch-templates [username]
    (println "FETCH for " username)
    (->>
        (get-templates username)
        (mapv (fn [[id name symbol]] {:id id :name name :symbol symbol}))))

