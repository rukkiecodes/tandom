<template>
  <header class="center examplex navbar">
    <vs-navbar center-collapsed :fixed="true" :square="true" v-model="active">
      <template #left>
        <Logo />
      </template>
      <vs-navbar-item :active="active == 'guide'" id="guide">
        Guide
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'license'" id="license">
        license
      </vs-navbar-item>
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
    Logo
  }
}
</script>
