(ns workout-demo.core
  (:require [workout-demo.routes :refer [app]]
            [org.httpkit.server :as http]
            [workout-demo.db.schema :refer [get-conn]]
            [vol1n.dynalog.core :refer [clear-table!]])
  (:gen-class))

(defonce server (atom nil))

(defn start-server [handler]
  (reset! server (http/run-server handler {:port 3000}))
  (let [conn (get-conn)])
  (println "Server running on http://localhost:3000"))

(defn stop-server []
  (when @server
    (@server) ;; Stops http-kit server
    (reset! server nil)
    (println "Server stopped.")))

(defn -main []
  (start-server app)
  @(promise)) 
