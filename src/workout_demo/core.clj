(ns workout-demo.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [workout-demo.routes :refer [app]])
  (:gen-class))

;; Start the Jetty server
(defn -main []
  (println "Starting Jetty server on http://localhost:3000")
  (run-jetty app {:port 3000 :join? false})) ;; `join? false` keeps it non-blocking
