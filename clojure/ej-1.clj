(defn digs-aux [a lista]

  (if (zero? a) 
    lista
    (digs-aux (quot a 10) (conj lista (rem a 10)))
   )
  )

(defn digs [a]
  (digs-aux a '())
  )
    
 
  