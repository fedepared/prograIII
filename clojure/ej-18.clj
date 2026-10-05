(defn b [lista argumento] (
                           map (fn[x] (x argumento)) lista
))


;ejemplo

(defn por_dos [x] (* 2 x))
(defn por_tres [x] (* 3 x))

(b (list por_dos por_tres) 4)