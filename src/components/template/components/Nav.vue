<template>
  <div class="hidden">
    <vs-navbar
      class="nav"
      shadow
      fixed
      square
      center-collapsed
      v-model="active"
    >
      <template #left>
        <vs-button
          class="menuButton"
          @click="activeSidebar = !activeSidebar"
          flat
          icon
        >
          <i class="las la-bars"></i>
        </vs-button>
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

    <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
      <vs-sidebar-item id="home" to="/template/cataloge">
        <template #icon>
          <i class="las la-copy"></i>
        </template>
        Cataloge
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="las la-bell"></i>

            <template #badge> 28 </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
import Logo from "../../Logo.vue"
export default {
  data: () => ({
    active: "home",
    activeSidebar: false,
  }),

  components: {
    Logo,
  },
}
</script>

<style scoped>
@import url(../assets/nav.css);
</style>
