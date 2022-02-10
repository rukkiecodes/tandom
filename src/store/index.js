import Vue from 'vue'
import Vuex from 'vuex'

import signup from "./modules/signup"
import signin from "./modules/signin"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    signup,
    signin,
  },
})
