(ns workout-demo-frontend.components.list-button)

(defn list-button [attrs]
    (let [on-click (:on-click attrs)
          text (:text attrs)
          subtext (:subtext attrs)
          icon (:icon attrs)
          variant (:variant attrs)
          extra-classes (:extra-classes attrs)
          class (str (cond
                       (= variant :primary) "flex items-center bg-blue-400 text-white gap-2 p-2 hover:bg-blue-500 transition duration-200 rounded-full "
                       (= variant :secondary) "flex items-center bg-gray-300 text-white gap-2 p-2 hover:bg-gray-400 transition duration-200 rounded-full "
                       (= variant :danger) "flex items-center bg-red-500 text-white gap-2 p-2 hover:bg-gray-700 transition duration-200 rounded-full ")
                    extra-classes)]
    [:button {:class class
              :on-click on-click}
     (when icon [icon])
     [:span {:class "text-md font-bold"} text]
     [:span {:class "text-sm opacity-80"} subtext]]))