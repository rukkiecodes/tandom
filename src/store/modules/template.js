import axios from "axios"
import request from "request"

export default {
  state: {
    designs: [],
    preview: [],
    previewDialog: false,
  },

  getters: {
    designs: (state) => state.designs,
    preview: (state) => state.preview,
  },

  mutations: {
    getTemplates: (state, response) => {
      console.log(response)
      if (response.data.success) {
        state.designs = []
        state.designs.push(...response.data.designs)
      }
    },

    previewDesign: (state, design) => {
      request(
        `http://localhost:3000/${design.html}`,
        (error, response, html) => {
          if (!error && response.statusCode == 200) {
            state.previewDialog = true
            state.preview = []
            state.preview.push({
              category: design.category,
              html,
              image: design.image,
            })
            setTimeout(() => {
              const height = document.querySelector(
                ".vs-dialog--scroll .vs-dialog__content"
              )
              height.style.maxHeight = "90%"
              console.log(state.preview, height)
            }, 100)
          }
        }
      )
    },
  },

  actions: {
    async getTemplates({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:3000/template/designs"
        )
        commit("getTemplates", response)
      } catch (error) {
        console.log(error)
      }
    },

    previewDesign({ commit }, design) {
      commit("previewDesign", design)
    },
  },
}
