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
    signupUser: (state, response) => {
      console.log("User: ", response.data)
      if (response.data.success == true) {
        router.push("/")
      }
      if (response.data.success != true) {
        router.push("/signup")
      }
    },
  },

  actions: {
    signupUser({ commit }) {
      const input = this.state.signup.credential
      if (input.name && input.email && input.password) {
        this.state.signup.loading = true
        axios
          .post("http://localhost:3000/auth/signup", input)
          .then((response) => {
            commit("signupUser", response)
            this.state.signup.loading = false
          })
          .catch((error) => {
            this.state.signup.loading = false
            console.log("Error: ", error)
          })
      } else {
        console.log("Please complete the form")
      }
    },
  },
}
