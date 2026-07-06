(defn es_primo 
  ([x] 
   (es_primo x 1 0))
  
  ([x divisor acumulador]
   ;llega al fin 
   (if (> divisor x)
     (
      if(= acumulador 2)
      true
      false
     )
     ;tiene que seguir contando
     (
      if (= (rem x divisor) 0)
      (es_primo x (inc divisor) (inc acumulador))
      (es_primo x (inc divisor) acumulador)
      )
     )
   )
  )

(defn contar_primos 
  ([x] (contar_primos x 1 0 0))
  
  ([cantidad_a_contar numero contador_de_primos primo_actual]
   (if (= cantidad_a_contar contador_de_primos)
     primo_actual
     (
      if (es_primo numero)
       (contar_primos cantidad_a_contar (inc numero) (inc contador_de_primos) numero)
       (contar_primos cantidad_a_contar (inc numero) contador_de_primos primo_actual)
       )
     
     )
   )
  )