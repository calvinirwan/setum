(ns setum.core
  (:require [reagent.core :as re]
            [ajax.core :refer [GET POST]]))
(defn selid [id]
  (.getElementById js/document id))

(defn read-class [id]
  (str (.-className (selid id))))

(def apapun (re/atom 0))

(defn home-component []
  [:div
   [:h3 "melikey!"]])

(declare ambil-jawaban)

(defn quiz-component []
  [:div
   [:h3 "I am a hero"]
   [:h1 (str @apapun)]
   [:button {:on-click #(ambil-jawaban)}]
])

(defn page [page]
  (read-class (selid page)))

(defn ambil-callback [response]
  (reset! apapun (:angka response)))

(defn ambil-jawaban []
  (GET "/jawab/" {:handler ambil-callback}))

(defn start [page]
  (condp = page
    "quiz" (do (ambil-jawaban)
               (re/render-component [quiz-component] (selid "soal")))
    "home" (re/render-component [home-component] (selid "body"))))

(start (read-class "body"))
