import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Vuesax from "vuesax"
import "./assets/vuesax.css"
import vuetify from './plugins/vuetify'

Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app")
