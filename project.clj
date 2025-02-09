(defproject workout-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "localhost:3000"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :managed-dependencies [[org.slf4j/slf4j-api nil]]
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.60"]
                 [com.google.javascript/closure-compiler-unshaded "v20220301"]
                 [reagent "1.2.0"]
                 [ring/ring-defaults "0.3.3"
                  :exclusions [joda-time]]
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
                 [io.github.FieryCod/holy-lambda "0.6.7"]
                 [io.github.FieryCod/holy-lambda-ring-adapter "0.1.2"]
                 [com.datomic/client-cloud "1.0.130"
                 :exclusions [joda-time]]
                 [com.datomic/local "1.0.285"]
                 [software.amazon.awssdk/ssm "2.30.16"
                 :exclusions [org.apache.httpcomponents.client5/httpclient5]]
                 [software.amazon.awssdk/kms "2.30.16"
                 :exclusions [org.apache.httpcomponents.client5/httpclient5]]
                 [com.github.clj-easy/graal-build-time "1.0.5"]
                 [org.apache.httpcomponents/httpclient "4.5.13"]]
  :plugins [[lein-figwheel "0.5.20"]
            [lein-shadow "0.4.0"]]
  :source-paths ["src", "src_cljs"]
  :aot [workout-demo.lambda]
  :clean-targets ^{:protect false} ["resources/public/js" "target"] 
  :profiles {:dev {:main workout-demo.core}
             :uberjar {:aot [workout-demo.lambda]
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]
                       :uberjar-name "output.jar"
                       :main workout-demo.lambda}}
  :shadow-cljs {:builds
              {:app {:target :browser
                     :output-dir "resources/public/js"
                     :asset-path "/js"
                     :modules {:main {:init-fn workout-demo-frontend.core/init}}
                     :js-options {:resolve {"vega-lite" {:target :global, :require "vega-lite"}
                     "vega-embed" {:target :global, :require "vega-embed"}
                     "vega" {:target :global, :require "vega"}}}}}
                :dependencies [[reagent "1.2.0"]]
                :source-paths ["src_cljs"]
                :dev-http {3001 {:root "resources/public"}}}
  :aliases {"dev" ["do"
                 ["run" "-m" "workout-demo.core"]
                 ["shadow" "watch" "app"]]}
  :uberjar-name "output.jar")