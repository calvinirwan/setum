(ns setum.play
  (:require [clojure.edn :as ed]
            [clojure.java.jdbc :as sql]
            ))

(def db 
  (let [config (clojure.edn/read-string (slurp "config.edn"))
        {:keys [db-host db-port db-name user password]} config]
    {:classname "org.postgresql.Driver" ; must be in classpath
     :subprotocol "postgresql"
     :subname (str "//" db-host ":" db-port "/" db-name)
                                        ; Any additional keys are passed to the driver
                                        ; as driver-specific properties.
     :user user
     :password password}))

(def quiz
  (let [quiz (ed/read-string (slurp "quiz/quiz1.edn"))
        {:keys [quiz]} quiz]
    {:quiz quiz}))

(def quizwilo
  (let [quiz (ed/read-string (slurp "quiz/quizwilo2.edn"))
        {:keys [quiz]} quiz]
    {:quiz quiz}))

(defn get-by-id
  [id]
  (sql/query db ["select * from users where id = ?" id]))

(defn insert-quiz
  [id title order]
  (sql/insert! db :quiz
               {:id id
                :title title
                :ordering order}))

(defn insert-question
  [text answer choice order quiz-id]
  (sql/insert! db :question
               {:text text
                :answer answer
                :choice choice
                :ordering order
                :quiz_id quiz-id}))

(defn insert-questions
  [question quiz-id]
  (map #(insert-question (:text %)
                         (:answer %)
                         (str (:choice %))
                         (:ordering %)
                         quiz-id) question))

(defn insert-quiz-set
  [id title order question]
  (do (insert-quiz id title order)
      (insert-questions question id)))

(defn inject-quiz
  [quiz]
  (let [{:keys [id title ordering questions]} quiz]
    (insert-quiz-set id title ordering questions)))

(defn get-quiz
  [id]
  (sql/query db ["select * from quiz, question where quiz.id = question.quiz_id and quiz.id = ?" id]))
