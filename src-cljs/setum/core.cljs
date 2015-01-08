(ns setum.core
  (:require [reagent.core :as re]
            [ajax.core :refer [GET POST]]
            ;;[clojure.browser.repl]
            ))

(.write js/document "Hello, ClojureScript!")

(defn selid
  "selector by id"
  [id]
  (.getElementById js/document id))

(defn seltag
  "selector by tag"
  [tagname]
  (.getElementsByTagName js/document tagname))

(def soal (re/atom {}))
(def current-soal (re/atom {}))
(def index (re/atom 0))
(def answer-post (re/atom {}))
(def answer-record (re/atom []))

(declare get-soal)
(declare quiz-form)

(defn moving-on []
  [:button {:class    "small right radius"
            :id       "login-button"
            :on-click #(do 
                         (reset! index (inc @index))
                         (reset! current-soal (nth @soal @index))                         
                         (get-soal))}
   "moving on"])

(defn true-form []
  [:div
   [:h2 "Jawaban lo \"" (:choice @answer-post)
    "\" Jawaban yang bener \"" (:answer @answer-post)"\""]
   [:h3 "Way to go bitch"]
   (moving-on)])

(defn false-form []
  [:div
   [:h2 "Jawaban lo \"" (:choice @answer-post)
    "\" Jawaban yang bener \"" (:answer @answer-post)"\""]
   [:h3 "You are a collosal failure"]
   (moving-on)])

(defn post-answer-callback
  [resp]
  (let [{:keys [stat choice answer]} resp]
    (do (reset! answer-record
                (conj @answer-record {:stat stat
                                      :choice choice
                                      :answer answer}))
        (if stat
          (re/render-component [true-form]
                               (selid "quiz-form"))
          (re/render-component [false-form]
                               (selid "quiz-form"))))))

(defn post-answer
  [choice answer]
  (do (reset! answer-post {:choice choice
                           :answer answer})
      (POST "/jawab"
            {:params {:user "dodol"
                      :choice choice
                      :answer answer}
             :handler post-answer-callback})))

(defn choice-maker [choice]
  [:button {:class "btn btn-default btn-block"
            :value choice
            :on-click #(post-answer choice (:answer @current-soal))}
   choice])

(defn quiz-form
  "Login-form component with logic to submit the form through ajax"
  []  
  (fn []
    [:fieldset.quiz
     [:legend "Testo Booster Quiz!!"]
     [:h4 (:ordering @current-soal) ". " (:text @current-soal)]
     [:br]
     (map #(choice-maker %) (:choice @current-soal)) 
     [:br]  
     ]))

(defn soal-error
	[resp]
	(js/alert "Soal error woi"))

(defn soal-dateng
	[resp]
	(do (reset! soal resp)
            (reset! current-soal (nth @soal @index))
            (re/render-component [quiz-form]
                                 (selid "quiz-form"))))	
(defn get-soal
	[]
	(GET "/soal"
             {:handler soal-dateng
              :error-handler soal-error}))

#_(defn display-atom
  []
  [:div
   [:p "(nth @soal @index)"]
   [:p (str @soal)]
   [:p (str @current-soal)]
   [:p (str @index)]
   [:p (str @answer-post)]
   [:p (str @answer-record)]])

(defn question-of-component
  []
  [:div {:class "panel panel-info"}
   [:div {:class "panel-heading"}
    [:h3 {:class "panel-title"} "Question #"]]
   [:div {:class "panel-body"}
    (str (inc @index) " of " (count @soal))]])

(defn score-count
  [answer-record soal]
  (let [total-true (count (filter #(true? (:stat %)) answer-record))
        total (count soal)]
    (quot (* 100 total-true) total)))

(defn score-component
  []
  [:div {:class "panel panel-success"}
   [:div {:class "panel-heading"}
    [:h3 {:class "panel-title"} "Score"]]
   [:div {:class "panel-body"}
    (str (score-count @answer-record @soal) "%")]])

(defn start []
  (do (get-soal)
      (re/render-component [question-of-component]
                           (selid "question-of-comp"))
      (re/render-component [score-component]
                           (selid "score-comp"))
      (re/render-component [display-atom]
                           (selid "atom-form"))))

(start)
