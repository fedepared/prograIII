
(defn sin-escalares [x l]
  (let [lista-limpia (remove (fn [y] (= y x)) l)]
    ;; Luego, mapeamos sobre los elementos que sobrevivieron
    (map (fn [elemento]
           (if (list? elemento)
             (sin-escalares x elemento) ;; Si es sublista, aplicamos recursión
             elemento))                 ;; Si no, lo dejamos igual
         lista-limpia)
    )
  )

(sin-escalares 'a '("a" ("b" "c" (1 "a"))))