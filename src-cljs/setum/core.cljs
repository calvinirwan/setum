(ns setum.core
  (:require [reagent.core :as re]
            [ajax.core :refer [GET POST]]
            ;;[clojure.browser.repl]
            ))

;; (defn selid [id]
;;   (.getElementById js/document id))

;; (defn read-class [id]
;;   (str (.-className (selid id))))

;; (def apapun (re/atom []))

;; (defn home-component []
;;   [:div
;;    [:h3 "melikey! faky"]])

;; (declare ambil-jawaban)

;; (defn quiz-component []
;;   [:div
;;    [:h3 "I am a hero"]
;;    [:h1 (str @apapun)]
;;    [:h1 (str (first @apapun))]
;;    [:button {:on-click #(ambil-jawaban)}]]
;; )

;; (defn page [page]
;;   (read-class (selid page)))

;; (defn ambil-callback [response]
;;   (reset! apapun (:angka response)))

;; (defn ambil-jawaban []
;;   (GET "/jawab/" {:handler ambil-callback}))

;; (defn start [page]
;;   (condp = page
;;     "quiz" (do (ambil-jawaban)
;;                (re/render-component [quiz-component] (selid "soal")))
;;     "home" (re/render-component [home-component] (selid "body"))))
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


(defn validate-answer [choice truth]
  (= choice truth))

(defn moving-on []
  [:button {:class    "small right radius"
            :id       "login-button"}
   "moving on"])

(defn true-form []
  [:div
   [:h3 "Way to go bitch"]
   (moving-on)])

(defn false-form []
  [:div
   [:h3 "You are a collosal failure"]
   (moving-on)])

(defn aftermath [choice truth]
  (if (validate-answer choice truth)
    (re/render-component [true-form]
                         (selid "quiz-form"))
    (re/render-component [false-form]
                         (selid "quiz-form"))))

(defn choice-maker [choice]
  [:button {:class "btn btn-default btn-block"
            :value (first choice)
            :on-click #(aftermath choice (:answer @soal))}
   choice])

(defn quiz-form
  "Login-form component with logic to submit the form through ajax"
  []
  (let [choice choice]
    (fn []
      [:fieldset.quiz
       [:legend "pilih salah satu"]
       [:h4 (:question @soal)]
       [:br]
       (map #(choice-maker %) (:choice @soal)) 
       [:br]  
       ])))

(defn quiz-component []
  [:div
   [:h3 "I am a hero"]]
)

(defn soal-error
	[resp]
	(js/alert "Soal error woi"))

(defn soal-dateng
	[resp]
	(do (reset! soal resp)
            (re/render-component [quiz-form]
                                 (selid "quiz-form"))))
	
(defn get-soal
	[]
	(GET "/soal"
             {:handler soal-dateng
              :error-handler soal-error}))

#_(defn start []
  (re/render-component [quiz-form]
                    (selid "quiz-form")))

(defn start []
  (get-soal))

(start)
