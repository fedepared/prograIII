(defn equilatero [l1 l2 l3] (
                             if (= l1 l2)
                              (
                               if (= l1 l3)
                               true
                               false
                               )
                              false
))

(defn isosceles [l1 l2 l3] (
                            if (= l1 l2)
                            (
                             if (= l1 l3)
                             false
                             true
                            )
                            (
                             if (= l2 l3)
                             true
                             (if (= l1 l3)
                               true
                               false
                               )
                            )
))

(defn escaleno [l1 l2 l3] (
                           if (not= l1 l2)
                           (
                            if (not= l1 l3)
                            true
                            false
                           )
                           false
))

(defn tipo_triangulo [l1 l2 l3] (
                                if (equilatero l1 l2 l3)
                                (println "equilatero")
                                (if (isosceles l1 l2 l3)
                                  (println "isosceles")
                                  (println "escaleno")
                                  )
))