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

(js/alert "lebrin")
(.write js/document "Hello, ClojureScript!")
;; (start (read-class "body"))
