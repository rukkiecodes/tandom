import axios from "axios"
import request from "request"

export default {
  state: {
    previewDialog: false,
    templates: [],
    previewTemplate: [],
    previewTemplateHtml: ``
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
          state.previewTemplateHtml = ``
          state.previewTemplate.push(design)
          state.previewTemplateHtml = html
        }
      })
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
  },
}
