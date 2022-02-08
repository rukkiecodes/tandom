import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Vuesax from "vuesax"

Vue.config.productionTip = false

import "./assets/vuesax.css"
Vue.use(Vuesax)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
