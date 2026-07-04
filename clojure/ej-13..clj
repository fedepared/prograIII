

(defn transponer [matriz]
  (apply map list matriz))

(defn transponer-recursiva [matriz]
  (if (empty? (first matriz))
    '()
    (cons (map first matriz)
          (transponer-recursiva (map rest matriz)))))

(transponer '((1 2)(4 5)(6 7)))