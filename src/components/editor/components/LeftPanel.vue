<template>
  <vs-sidebar open :square="true" class="leftPanel">
    <div class="layersContainer">
      <div class="layers-container"></div>
    </div>
    <div class="blocksContainer">
      <div class="blocksNav">
        <vs-button
          transparent
          :active="activeButton == 0"
          @click="activeButton = 0"
          style="width: 3em"
        >
          <span
            style="font-size: 1.2rem"
            class="mdi mdi-package-variant-closed"
          ></span>
        </vs-button>
      </div>
      <div class="blocks">
        <div id="blocks"></div>
      </div>
    </div>
  </vs-sidebar>
</template>

<script>
export default {
  data: () => ({
    activeButton: 0,
  }),
}
</script>

<style scoped>
@import url(../assets/leftPanel.css);
</style>
