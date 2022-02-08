<template>
  <vs-navbar class="nav" center-collapsed :fixed="true">
    <template #left>
      <Logo />
    </template>
    <template #right>
      <vs-button color="#6E14EC" to="/signin" flat>Sign In</vs-button>
      <vs-button color="#6E14EC" to="/signup">Sign Up</vs-button>
    </template>
  </vs-navbar>
</template>

<script>
import Logo from "../Logo.vue"
export default {
  components: {
    Logo,
  },
}
</script>

<style scoped>
@import url(./assets/nav.css);
</style>
