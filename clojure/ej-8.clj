(defn aux[l a]
 (remove (fn [x] (= x a)) l)
  )

(defn remover [l]
  (
    if (empty? l)
   '()
    (cons (first l) (remover (aux (rest l) (first l )) ))
   )
  
  )

(remover '(1 2 3 1 5 7 2 7))

