(defn slice 
  ([cadena cant_valores] (slice cadena cant_valores 0))
  
  ([cadena cant_valores contador]
   (
    if (< (- (count cadena) contador) cant_valores)
    '()
    (cons (subs cadena contador (+ contador cant_valores)) (slice  cadena cant_valores (inc contador)) )
    )
   )
  )

(slice "abcde" 3)