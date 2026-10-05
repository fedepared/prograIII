(defn ordenar-por-longitud [lista-de-listas]
  (sort (fn [a b] (compare (count a) (count b))) lista-de-listas))

(ordenar-por-longitud '((5 2 1) (1 2 3) (1 2) 4))