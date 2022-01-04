import Vue from "vue"
import Vuex from "vuex"

import editor from "./modules/editor"
import signup from "./modules/signup"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    editor,
    signup,
  },
})
