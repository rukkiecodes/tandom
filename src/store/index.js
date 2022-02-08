import Vue from 'vue'
import Vuex from 'vuex'

import signup from "./modules/signup"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    signup: signup,
  },
})
