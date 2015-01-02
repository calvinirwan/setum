(ns setum.dbase
  (:require [cemerick.url :as curl]
            [clojure.java.jdbc :as sql]
            ))

(def config
  (let [config (clojure.edn/read-string (slurp "config.edn"))
        {:keys [key base-url db-host db-port db-name user password]} config]
    {:key key
     :base-url base-url
     :db-host db-host
     :db-port db-port
     :db-name db-name
     :user user
     :password password}))



(def couch (assoc (curl/url "https://cloudant-account-name.cloudant.com/" "databasename")
          :username "username"
          :password "password"))

(def quest "databasename")


