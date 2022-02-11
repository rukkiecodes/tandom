export default {
  state: {
    nav: [
      {
        title: "Templates",
        to: "/templates",
        icon: "las la-border-all",
      },
      {
        title: "Account",
        to: "/account",
        icon: "las la-user-alt",
      },
      {
        title: "Copies",
        to: "/copies",
        icon: "las la-newspaper",
      },
    ],
  },

  getters: {
    nav: (state) => state.nav,
  },
}
