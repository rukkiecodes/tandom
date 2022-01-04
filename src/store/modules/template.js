import axios from "axios"

export default {
  state: {
    templates: [],
  },

  getters: {
    templates: (state) => state.templates,
  },

  mutations: {
    getTamplates: (state, response) => {
      state.templates.push(...response.data.data)
      console.log(state.templates)
    },
  },

  actions: {
    async getTamplates({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:3000/design/designs"
        )
        commit("getTamplates", response)
      } catch (error) {
        console.log("ERROR: ", error)
        // Notify.create({
        //   message: "Network error! Check your network then try again",
        //   position: "top-right",
        //   color: "white",
        //   textColor: "red-14",
        // })
        return error
      }
    },
  },
}
