(defn encontrar_letra [cadena letra]
  (if (empty? cadena)
    false
    (if (= letra (first cadena))
      true
      (
       encontrar_letra (rest cadena) letra))
    )
  )

(defn es_anagrama 
  ([cadena candidato_anagrama] (
                                if(= (sort cadena) (sort candidato_anagrama))
                                true
                                false
  ))
  
  )

(defn filtrar_anagramas [cadena lista_candidatos]
  (
   filter (fn [x] (es_anagrama cadena x)) lista_candidatos
   ))

(es_anagrama "amor" "roma")