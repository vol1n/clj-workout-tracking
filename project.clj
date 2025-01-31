(defproject workout-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "localhost:3000"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.60"]
                 [com.google.javascript/closure-compiler-unshaded "v20220301"]
                 [com.datomic/local "1.0.285"]
                 [reagent "1.2.0"]
                 [ring/ring-defaults "0.3.3"]
                 [compojure "1.6.2"]
                 [ring/ring-jetty-adapter "1.9.5"]
                 [ring/ring-json "0.5.1"]
                 [clojure.java-time "1.4.3"]
                 [thheller/shadow-cljs "2.18.0"]
                 [cljs-ajax "0.8.4"]
                 [ch.qos.logback/logback-classic "1.4.11"]
                 [cheshire "5.11.0"]
                 [ring-cors "0.1.13"]
                 [aero "1.1.6"]
                 [com.auth0/java-jwt "4.4.0"]
                 [ring-adapter-lambda "0.1.5"]]
  :plugins [[lein-figwheel "0.5.20"]
            [lein-shadow "0.4.0"]]
  :source-paths ["src", "src_cljs"]
  :main ^:skip-aot workout-demo.core
  :clean-targets ^{:protect false} ["resources/public/js" "target"]
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}}
  :shadow-cljs {:builds
              {:app {:target :browser
                     :output-dir "resources/public/js"
                     :asset-path "/js"
                     :modules {:main {:init-fn workout-demo-frontend.core/init}}}}
                :dependencies [[reagent "1.2.0"]]
                :source-paths ["src_cljs"]
                :dev-http {3001 {:root "resources/public"}}}
  :aliases {"dev" ["do"
                 ["run" "-m" "workout-demo.core"]
                 ["shadow" "watch" "app"]]}
  :uberjar-name "workout-demo.jar"
  :profiles {:uberjar {:aot :all
                       :uberjar-name "workout-demo.jar"}})
