(ns setum.routes
  (:require [compojure.core :refer :all]
            [setum.layout :as page]
            [noir.response :as resp]))

(defn homepage
  "The rendering function for homepage"
  []
  (page/render "base.html"
               {:headline "Welcome to ...."
                :title "Luminoob website"
                :page "home"}))

(defn quizpage
  "The rendering function for homepage"
  []
  (page/render "quiz.html"
               {:headline "Welcome to quiz"
                :title "Luminoob website"
                :page "quiz"
                :problem "pg"
                :problem-content "soal"
                :soal "what is what ?"}))

(defroutes home
  (GET "/" req
       (homepage))
  (GET "/quiz/" req
       (quizpage))
  (GET "/jawab/" req
       (resp/edn {:angka (rand-int 10)})))

