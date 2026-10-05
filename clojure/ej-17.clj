(defn to_list [cadena]
  (seq (.toCharArray cadena))
  )


(defn se_repite_letra?
  ([lista letra]
   (se_repite_letra? lista letra 0))

  ([lista letra acumulador]
   (if (empty? lista)
     (> acumulador 1)
     ;; Si no está vacía, revisamos la letra actual
     (if (= letra (first lista))
       (se_repite_letra? (rest lista) letra (inc acumulador))
       (se_repite_letra? (rest lista) letra acumulador)))))

(defn tiene-repetidas? [lista]
  (boolean
   (some (fn [letra] (se_repite_letra? lista letra)) lista)))