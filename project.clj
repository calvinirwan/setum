(defproject setum "0.1.0"
  :repl-options {:init-ns setum.repl}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [ring-server "0.3.1"]
                 [lib-noir "0.8.6"]
                 [http-kit "2.1.19"]
                 [com.cemerick/url "0.1.1"]
                 [noir-exception "0.2.2"]
                 [environ "1.0.0"]
                 [clj-time "0.8.0"]
                 [im.chit/cronj "1.4.2"]
                 [com.taoensso/timbre "3.3.0"]
                 [prone "0.6.0"]
                 [enlive "1.1.5"]
                 [selmer "0.6.9"]
                 [markdown-clj "0.9.47"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [reagent "0.4.2"]
                 [cljs-ajax "0.2.6"]
                 [secretary "1.2.0"]
                 [enfocus "2.1.0"]
                 [kioo "0.4.0"]
                 [om "0.7.1"]
                 [com.ashafa/clutch "0.4.0-RC1"]
                 [couchbase-clj "0.2.0"]
                 [zenedu.squest/questdb "0.2.2"]
                 [expectations "2.0.9"]

                 [org.clojure/java.jdbc "0.3.0"]
                 [postgresql/postgresql "9.1-901.jdbc4"]]

  :cljsbuild {:builds
              [{:source-paths ["src-cljs"],
                :compiler {:pretty-print true,
                           :output-to "resources/public/js/app.js",
                           :optimizations :none},
                :id "dev"}
               {:source-paths ["src-cljs"],
                :compiler {:pretty-print false,
                           :closure-warnings {:non-standard-jsdoc :off},
                           :output-to "resources/public/js/app.js",
                           :output-wrapper false,
                           :optimizations :advanced},
                :id "prod"}]}
  :ring {:handler setum.handler/app,
         :init setum.handler/init,
         :destroy setum.handler/destroy}
  :profiles {:uberjar {:aot :all},
             :production
             {:ring
              {:open-browser? false, :stacktraces? false, :auto-reload? false}},
             :dev
             {:source-paths ["dev" "test"]
              :dependencies [[ring-mock "0.1.5"]
                             [ring/ring-devel "1.3.1"]
                             [pjstadig/humane-test-output "0.6.0"]
                             [org.clojure/tools.nrepl "0.2.3"]],
              :injections [(require 'pjstadig.humane-test-output)
                           (pjstadig.humane-test-output/activate!)],
              :env {:dev true}
              :repl-options {:init-ns user}}}
  :url "http://example.com/FIXME"
  :main setum.core
  :jvm-opts ["-Xmx128m"]
  :plugins [[lein-ring "0.8.11"]
            [codox "0.8.10"]
            [lein-expectations "0.0.8"]
            [lein-environ "1.0.0"]
            [lein-cljsbuild "1.0.3"]
            [lein-autoexpect "1.2.2"]
            [com.cemerick/austin "0.1.5"]
            [cider/cider-nrepl "0.7.0"]]
  :aliases {"go"
            ["with-profile" "calvin,dev" "repl"]

            "gore"
            ["do"
             ["with-profile" "calvin,dev" "cljsbuild" "clean"]
             ["with-profile" "calvin,dev" "cljsbuild" "auto" "prod"]]}
  :description "FIXME: write description"
  :min-lein-version "2.0.0")
