import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Vuesax from "vuesax"
import "./assets/vuesax.css"

Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
