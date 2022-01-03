<template>
  <vs-navbar class="nav" center-collapsed :fixed="true">
    <template #left>
      <Logo />
    </template>
    <template #right>
      <vs-button
        :shadow="activeButton == 1"
        :active="activeButton == 1"
        :color="signinColor"
        style="font-weight: 600; color: #000"
        to="/signin"
        >Sign In</vs-button
      >
      <vs-button
        :shadow="activeButton == 2"
        :active="activeButton == 2"
        :color="signupColor"
        style="font-weight: 600; color: #000"
        to="/"
        >Sign Up</vs-button
      >
    </template>
  </vs-navbar>
</template>

<script>
import Logo from "../Logo.vue"
export default {
  data: () => ({
    activeButton: 2,
    signinColor: "#fff",
    signupColor: "#fff",
  }),

  components: {
    Logo,
  },

  mounted() {
    if (location.pathname == "/") {
      this.activeButton = 2
    } else if (location.pathname == "/signin") {
      this.activeButton = 1
    }
  },
}
</script>

<style scoped>
@import url(./assets/nav.css);
</style>
