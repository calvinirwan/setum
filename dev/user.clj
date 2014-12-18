(ns user
  "Tools for interactive development with the REPL. This file should
  not be included in a production build of the application."
  (:require
   [clojure.java.io :as io]
   [clojure.java.javadoc :refer (javadoc)]
   [clojure.pprint :refer (pprint)]
   [clojure.reflect :refer (reflect)]
   [clojure.repl :refer (apropos dir doc find-doc pst source)]
   [clojure.set :as set]
   [clojure.string :as str]
   [clojure.test :as test]
   [selmer.parser :as selmer]
   [clojure.tools.namespace.repl :refer (refresh refresh-all)]
   [cemerick.austin.repls :as crepl]
   [cemerick.austin :as ca]
   [setum.repl :refer (start-server stop-server)]))

#_(def repl-env (reset! crepl/browser-repl-env
                      (ca/repl-env)))

#_(defn gen-brepl [] (cemerick.austin.repls/browser-connected-repl-js))

#_(defn start-brepl [] (cemerick.austin.repls/cljs-repl repl-env))

(defn start []
  (start-server))

(defn restart []
  (stop-server)
  (refresh :after 'user/start)) 
