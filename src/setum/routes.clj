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

(def user0 {:name "budi"})

(def answer0 {:correct-answer "lala"
              :choice ["badu" "lebron" "lala" "buntoy" "gila"]})

(def question0 {:text "what ?"
                :answer answer0
                :cs "don't think.. FEEL....."
                :order 0})

(def answer1 {:correct-answer "dog"
              :choice ["dog" "wolf" "human" "loco" "fuerta"]})

(def question1 {:text "what are you ?"
                :answer answer1
                :cs "look at the mirror what do you see"
                :order 1})

(def quiz0 [question0 question1])

(defn get-soal
  []
  {:question "who are you ?"
   :choice ["laboon" "edge" "woli" "vokin" "book"]
   :answer "vokin"})

(defn modalspage
  "The rendering function for homepage"
  []
  (page/render "modals.html"
               {:question question0
                :user user0
                :title "Luminoob website"
                :page "home"}))

(defroutes home
  (GET "/" req
       (modalspage))
  (GET "/quiz/" req
       (quizpage))
  (GET "/modals/" req
       (modalspage))
  (GET "/jawab/" req
       (resp/edn {:angka [{:name "calvin" :job "dope" }
                          {:name "calvin2" :job "dope2" }
                          {:name "calvin3" :job "dope3" }]})))
