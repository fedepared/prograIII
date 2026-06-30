(defn repartir [& args]
  (if (nil? args)
    "Uno para vos, uno para mi"
    (map (fn [x] (str "Uno para " x ", uno para mi")) args)))