(ns workout-demo.lambda
    (:gen-class)
    (:require [fierycod.holy-lambda-ring-adapter.core :as hlra]
              [fierycod.holy-lambda.core :as h]
              [workout-demo.routes :refer [app]]))

(def HttpApiProxyGateway (hlra/ring<->hl-middleware app))

(h/entrypoint [#'HttpApiProxyGateway])

