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
    <PageLoad />
  </div>
</template>

<script>
// @ts-nocheck
import Navbar from "./components/Navbar.vue"
import LeftPanel from "./components/LeftPanel.vue"
import ConfigPanel from "./components/ConfigPanel.vue"
import PageLoad from "./components/PageLoad.vue"
import init from "./scripts/init.js"
export default {
  components: {
    Navbar,
    LeftPanel,
    ConfigPanel,
    PageLoad,
  },

  mounted() {
    this.$nextTick(() => {
      init()
    })
  },
}
</script>

<style scoped>
@import url(./assets/editor.css);
</style>
