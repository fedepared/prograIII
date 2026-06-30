(defn aux [l]
  (if (empty? l)
    '()
     (cons (first l) (aux (rest (rest l))))
    ))

(defn tomar-pares [a b]
  (concat (aux a) (aux b))
  )


