(defn cadena_a_vector [cadena] (seq (.split cadena " ")))



(defn contar_apariciones [lista palabra contador]
  (if (empty? lista)
    contador
    (if (= (first lista) palabra)
      (contar_apariciones (rest lista) palabra (inc contador))
      (contar_apariciones (rest lista) palabra contador)
      )
    )
  )

(contar_apariciones (cadena_a_vector "anita lava la tina de anita") "anita" 0)