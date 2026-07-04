(defn aux [l contador largo]
  (if (empty l)
    '()
    (if (even? largo)
      (if (= contador (dec (quot largo 2)))
        (list (first l) (second l))
        (aux (rest l) (inc contador) largo))
      (if (= contador (quot largo 2))
        (first l)
        (aux (rest l) (inc contador) largo)))))


(defn aux2 [l largo]
  (if (odd? largo)
    (nth l (quot largo 2))
    (list (nth l (dec (quot largo 2))) (nth l (quot largo 2)))
    )
  )



;; (defn medio [l] (let [largo (count l) ] (aux l 0 largo)))
(defn medio2 [l] (let [largo (count l)] (aux2 l largo)))


(medio2 '(1 2 3 4 5 6 7))
  