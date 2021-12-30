<template>
  <div id="vs-app" class="theme-container">
    <Navbar />
    <LeftPanel />
    <ConfigPanel />
    <main class="editor">
      <div class="gjsContainer">
        <div id="editor"></div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import LeftPanel from "./components/LeftPanel.vue"
import ConfigPanel from "./components/ConfigPanel.vue"
import init from "./scripts/init.js"
export default {
  data: () => ({}),

  components: {
    Navbar,
    LeftPanel,
    ConfigPanel,
  },

  mounted() {
    this.$nextTick(() => {
      init()
    })
  },

  methods: {},
}
</script>

<style scoped>
@import url(./assets/editor.css);
</style>
