<template>
  <header class="center examplex navbar">
    <vs-navbar center-collapsed :fixed="true" :square="true" v-model="active">
      <template #left>
        <Logo />
      </template>
      <div class="panel__basic-actions"></div>
      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
  </header>
</template>

<script>
import Logo from "./Logo.vue"
export default {
  data: () => ({
    active: "guide",
  }),

  components: {
    Logo,
  },
}
</script>
