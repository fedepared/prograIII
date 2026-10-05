;ADN2ARN: G → C, C → G, T → A y, por último, A → U

(defn aux [x] (cond (= x "G") "C" (= x "C") "G" (= x "T") "A" (= x "A") "U"))

(defn adn2arn [l] (map aux l))