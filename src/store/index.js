import Vue from 'vue'
import Vuex from 'vuex'

import signup from "./modules/signup"
import signin from "./modules/signin"
import navigation from "./modules/navigation"
import template from "./modules/template"
import editor from "./modules/editor"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    signup,
    signin,
    navigation,
    template,
    editor,
  },
})
