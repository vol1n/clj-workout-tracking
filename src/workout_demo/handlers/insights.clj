(ns workout-demo.handlers.insights
    (:require [workout-demo.db.service :refer [get-exercises]]))

(defn fetch-exercises [username]
  (let [exercises (get-exercises username)]
    (reduce (fn [acc [id name]]
              (conj acc {:id id :name name})) exercises)))