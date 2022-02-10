import axios from "axios"
import router from "../../router"

export default {
  state: {
    credential: {
      name: "",
      email: "",
      password: "",
    },

    loading: false,
  },

  mutations: {
    signinUser: (state, response) => {
      console.log("User: ", response.data)
      if (response.data.success == true) {
        router.push("/template")
      }
      if (response.data.success != true) {
        router.push("/")
      }
    },
  },

  actions: {
    signinUser({ commit }) {
      const input = this.state.signin.credential
      if (input.email && input.password) {
        this.state.signin.loading = true
        axios
          .post("http://localhost:3000/auth/signin", input)
          .then((response) => {
            commit("signinUser", response)
            this.state.signin.loading = false
          })
          .catch((error) => {
            this.state.signin.loading = false
            console.log("Error: ", error)
          })
      } else {
        console.log("Please complete the form")
      }
    },
  },
}
