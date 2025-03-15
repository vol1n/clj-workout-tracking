(defproject workout-demo-frontend "0.1.0-SNAPSHOT"
  :description "Frontend for Workout Demo"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojurescript "1.11.60"]
                 [thheller/shadow-cljs "2.18.0"]
                 [reagent "1.2.0"]
                 [cljs-ajax "0.8.4"]
                 [org.clojure/clojure "1.10.3"]
                 [org.clojure/clojurescript "1.11.4"]
                 [com.google.javascript/closure-compiler-unshaded "v20220301"]]
  :plugins [[lein-shadow "0.4.0"]]
  :source-paths ["src"]
  :clean-targets ^{:protect false} ["resources/public/js" "target"]
  :shadow-cljs  {:dev-http {3001 "../resources/public"}
                 :builds
                 {:app {:target :browser
                        :output-dir "../resources/public/js"
                        :asset-path "/js"
                        :modules {:main {:init-fn workout-demo-frontend.core/init}} 
                        :js-options {:resolve {"vega-lite" {:target :global, :require "vega-lite"}
                                               "vega-embed" {:target :global, :require "vega-embed"}
                                               "vega" {:target :global, :require "vega"}}}}}}
  :aliases {"dev" ["shadow" "watch" "app"]
            "info" ["shadow-cljs"  "info"]}
  :main workout-demo-frontend.core)