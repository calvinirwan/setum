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

(defn get-page
  "Returns the classname of a body to identify which page are we in"
  []
  (str (.-className (selid "body"))))

(def current-quiz (atom {}))

(defn quiz-form
  "Login-form component with logic to submit the form through ajax"
  []
  (let [choice [{:id "radio1" :value "laboon" :checked (atom true)}
                {:id "radio2" :value "edgy" :checked (atom true)}]
        question (first @current-quiz)]
    (fn []
      [:fieldset.quiz
       [:legend "pilih salah satu"]
       [:br]
       [:input {:type        "radio"
                :value       (:value (first choice))
                :id          (:id (first choice))
                :name        "ew"
                :checked     @(:checked (first choice))
                :on-click    #(reset! (:checked (first choice))
                                      (not @(:checked (first choice))) )}
        (:value (first choice))] 
       [:br]
       [:input {:type        "radio"
                :value       (:value (second choice))
                :id          (:id (second choice))
                :name        "ew"
                :checked     @(:checked (second choice))
                :on-click    #(reset! (:checked (second choice))
                                      (not @(:checked (second choice))) )
                }
        (:value (second choice))]
       [:br]
       [:button {:class    "small right radius"
                 :id       "login-button"}
        "submit"]])))

(defn quiz-component []
  [:div
   [:h3 "I am a hero"]]
)

(defn start []
  (re/render-component [quiz-form]
                    (selid "quiz-form")))

(start)
