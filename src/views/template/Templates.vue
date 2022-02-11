<template>
  <v-container>
    <v-app-bar color="transparent" dense flat app>
      <vs-navbar center-collapsed v-model="active">
        <template #left>
          <vs-button v-if="showMenuButton" @click="drawer = !drawer" flat icon>
            <i class="las la-bars"></i>
          </vs-button>
          <Logo v-if="showAppbarLogo" />
        </template>
        <template #right></template>
      </vs-navbar>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" width="200" app>
      <vs-sidebar
        open
        square
        absolute
        notShadow
        style="width: 100%"
        v-model="activeSide"
      >
        <template #logo> </template>
        <vs-sidebar-item
          :key="i"
          :to="navs.to"
          :id="navs.title"
          v-for="(navs, i) in nav"
        >
          <template #icon>
            <i :class="navs.icon"></i>
          </template>
          {{ navs.title }}
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-button color="danger" icon>
              <i style="transform: scaleX(-1)" class="las la-sign-out-alt"></i>
            </vs-button>
          </vs-row>
        </template>
      </vs-sidebar>
    </v-navigation-drawer>
    <router-view />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import Logo from "../../components/Logo.vue"
export default {
  data: () => ({
    active: "guide",
    activeSide: "templates",
    drawer: true,
  }),

  components: {
    Logo,
  },

  mounted() {
    this.$nextTick(() => {
      this.removeBorder()
      this.updateNav()
      this.getTemplates()
    })
  },

  updated() {
    this.updateNav()
  },

  methods: {
    ...mapActions(["getTemplates"]),

    removeBorder() {
      const border = document.querySelector(".v-navigation-drawer__border")
      if (border) border.style.display = "none"
    },

    updateNav() {
      var fullLocation = location.pathname
      var arr = fullLocation.split("/")
      arr.shift()
      fullLocation = arr.join("/")

      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }

      this.activeSide = capitalizeFirstLetter(fullLocation)
    },
  },

  computed: {
    ...mapGetters(["nav"]),

    showMenuButton() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true
        case "sm":
          return true
        case "md":
          return false
        case "lg":
          return false
        case "xl":
          return false
      }
    },

    showAppbarLogo() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false
        case "sm":
          return false
        case "md":
          return true
        case "lg":
          return true
        case "xl":
          return true
      }
    },

    marginTop() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "mt-14"
        case "sm":
          return "mt-14"
        case "md":
          return "mt-14"
      }
    },
  },
}
</script>
