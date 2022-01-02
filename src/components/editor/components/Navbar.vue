<template>
  <header class="center examplex navbar">
    <vs-navbar center-collapsed :fixed="true" :square="true" v-model="active">
      <template #left>
        <Logo />
      </template>
      <vs-button
        class="undoButton"
        icon
        shadow
        :active="editor.activeButton == 1"
      >
        <i style="color: #000" class="las la-undo icon"></i>
      </vs-button>
      <vs-button
        class="redoButton"
        icon
        shadow
        :active="editor.activeButton == 2"
      >
        <i style="color: #000" class="las la-redo icon"></i>
      </vs-button>
      <vs-button
        class="previewButton"
        icon
        shadow
        :active="editor.activeButton == 3"
      >
        <i style="color: #000" class="las la-eye icon"></i>
      </vs-button>
      <vs-button
        class="exportButton"
        icon
        shadow
        :active="editor.activeButton == 4"
      >
        <i style="color: #000" class="las la-arrow-down icon"></i>
      </vs-button>
      <template #right>
        <vs-button
          class="mobileButton"
          id="device-mobile"
          icon
          shadow
          :active="editor.deviceButton == 1"
        >
          <i style="color: #000" class="las la-mobile icon"></i>
        </vs-button>
        <vs-button
          class="laptopButton"
          id="device-desktop"
          icon
          shadow
          :active="editor.deviceButton == 2"
        >
          <i style="color: #000" class="las la-laptop icon"></i>
        </vs-button>
        <!-- <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button> -->
      </template>
    </vs-navbar>
  </header>
</template>

<script>
import { mapState } from "vuex"
import Logo from "./Logo.vue"
export default {
  data: () => ({
    active: "guide",
  }),

  components: {
    Logo,
  },

  computed: {
    ...mapState(["editor"]),
  },
}
</script>

<style scoped>
@import url(../assets/nav.css);
</style>