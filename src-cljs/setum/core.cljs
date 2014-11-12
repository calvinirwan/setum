(ns setum.core
  (:require [reagent.core :as re]
            [ajax.core :refer [GET POST]]))
(defn selid [id]
  (.getElementById js/document id))

(defn read-class [id]
  (str (.-className (selid id))))

(def apapun (re/atom []))

(defn home-component []
  [:div
   [:h3 "melikey!"]])

(declare ambil-jawaban)

(defn quiz-component []
  [:div
   [:h3 "I am a hero"]
   [:h1 (str @apapun)]
   [:h1 (str (first @apapun))]
   [:button {:on-click #(ambil-jawaban)}]
   [:button {:on-click (next-soal)}]
])

(defn page [page]
  (read-class (selid page)))

(defn ambil-callback [response]
  (reset! apapun (:angka response)))

(defn ambil-jawaban []
  (GET "/jawab/" {:handler ambil-callback}))

(defn next-soal [response]
  (swap! apapun next))

(defn start [page]
  (condp = page
    "quiz" (do (ambil-jawaban)
               (re/render-component [quiz-component] (selid "soal")))
    "home" (re/render-component [home-component] (selid "body"))))

(start (read-class "body"))
