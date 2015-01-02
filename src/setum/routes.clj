(ns setum.routes
  (:require [compojure.core :refer :all]
            [setum.layout :as page]
            [noir.response :as resp]
            [setum.play :as play]))

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
  ;; [{:question "who are you ?"
  ;;   :choice ["laboon" "edge" "woli" "vokin" "book"]
  ;;   :answer "vokin"
  ;;   :order 0}

  ;;  {:question "who are us ?"
  ;;   :choice ["wth men ?" "toy's are us" "the world" "jewish" "hitler"]
  ;;   :answer "wth men ?"
  ;;   :order 1}

  ;;  {:question "finally, a proper question '1 + 1 equals ?'"
  ;;   :choice ["love coz luv is alwys rigt" "hobo" "world peace"  "2"]
  ;;   :answer "2"
  ;;   :order 2}]
  (:questions (:quiz play/quizwilo))
  )

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
  (GET "/soal" req
       (resp/edn (get-soal)))
  (POST "/jawab" req
        (let [{:keys [choice user answer]} (:params req)]
          (if (= choice answer)
            (resp/edn {:user user
                       :message "jawaban lo bener"
                       :choice choice
                       :answer answer
                       :stat true})
            (resp/edn {:user user
                       :message "ANJING GUOBLOAK SIA!!"
                       :choice choice
                       :answer answer
                       :stat false})))))

