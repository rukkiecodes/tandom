// @ts-nocheck
import axios from "axios"
import request from "request"
import router from "../../router"
import vueCookies from "vue-cookies"

export default {
  state: {
    previewDialog: false,
    templates: [],
    previewTemplate: [],
  },

  getters: {
    templates: (state) => state.templates,
    previewTemplate: (state) => state.previewTemplate,
  },

  mutations: {
    getTamplates: (state, response) => {
      state.templates = []
      state.templates.push(...response.data.data)
    },

    previewTemplate: (state, design) => {
      request(design.html, (error, response, html) => {
        if (!error && response.statusCode == 200) {
          state.previewDialog = true
          state.previewTemplate = []
          state.previewTemplate.push({
            category: design.category,
            html,
            image: design.image,
          })
          console.log(state.previewTemplate)
        }
      })
    },

    editTemplate: (state, design) => {
      request(design.html, (error, response, html) => {
        if (!error && response.statusCode == 200) {
          localStorage.setItem(
            "designTemplate",
            JSON.stringify({
              category: design.category,
              html,
              image: design.image,
            })
          )
          router.push("/editor")
        }
      })

      return state
    },
  },

  actions: {
    async getTamplates({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/design/designs")
        commit("getTamplates", response)
      } catch (error) {
        return error
      }
    },

    previewTemplate({ commit }, design) {
      commit("previewTemplate", design)
    },

    editTemplate({ commit }, design) {
      commit("editTemplate", design)
    },
  },
}
