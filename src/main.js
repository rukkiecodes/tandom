import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Vuesax from "vuesax"

Vue.config.productionTip = false

import "./assets/vuesax.css"
import vuetify from './plugins/vuetify'
Vue.use(Vuesax)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app")
