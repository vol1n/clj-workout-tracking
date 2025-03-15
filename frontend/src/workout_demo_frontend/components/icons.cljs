(ns workout-demo-frontend.components.icons)

(defn plus-sign []
  [:svg {:xmlns "http://www.w3.org/2000/svg"
         :viewBox "0 0 24 24"
         :fill "none"
         :stroke "currentColor"
         :stroke-width "2"
         :class "w-6 h-6"}
   [:line {:x1 "12" :y1 "5" :x2 "12" :y2 "19" :stroke-linecap "round"}]
   [:line {:x1 "5" :y1 "12" :x2 "19" :y2 "12" :stroke-linecap "round"}]])

(defn x-sign []
  [:svg {:xmlns "http://www.w3.org/2000/svg"
         :viewBox "0 0 24 24"
         :fill "none"
         :stroke "currentColor"
         :stroke-width "2"
         :class "w-6 h-6"}
   [:line {:x1 "5" :y1 "5" :x2 "19" :y2 "19" :stroke-linecap "round"}]
   [:line {:x1 "19" :y1 "5" :x2 "5" :y2 "19" :stroke-linecap "round"}]])

(defn check-mark []
  [:svg {:xmlns "http://www.w3.org/2000/svg"
         :viewBox "0 0 24 24"
         :fill "none"
         :stroke "currentColor"
         :stroke-width "2"
         :stroke-linecap "round"
         :stroke-linejoin "round"
         :class "w-6 h-6"} ;; Tailwind for size
   [:path {:d "M5 13l4 4L19 7"}]]) ;; The checkmark path