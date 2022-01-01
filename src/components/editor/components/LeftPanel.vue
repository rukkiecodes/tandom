<template>
  <vs-sidebar open :square="true" class="leftPanel">
    <vue-resizable :minHeight="31" :maxHeight="200" :fitParent="true" :active="['b']">
      <div class="layersContainer">
        <div class="layers-container"></div>
      </div>
    </vue-resizable>
    <div class="blocksContainer">
      <div class="blocksNav">
        <vs-tooltip bottom dark>
          <vs-button
            transparent
            :active="activeButton == 1"
            @click="handleBlocksContainer"
            style="width: 3em"
          >
            <span
              style="font-size: 1.2rem"
              class="mdi mdi-package-variant-closed"
            ></span>
          </vs-button>

          <template #tooltip>
            <span
              style="
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                  'Helvetica Neue', sans-serif;
              "
              >Basic blocks</span
            >
          </template>
        </vs-tooltip>

        <vs-tooltip bottom dark>
          <vs-button
            transparent
            :active="activeButton == 2"
            @click="handleComponentsContainer"
            style="width: 3em"
          >
            <span
              style="font-size: 1.2rem"
              class="mdi mdi-rocket-launch-outline"
            ></span>
          </vs-button>

          <template #tooltip>
            <span
              style="
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                  'Helvetica Neue', sans-serif;
              "
              >Component blocks</span
            >
          </template>
        </vs-tooltip>

        <vs-tooltip bottom dark>
          <vs-button
            transparent
            :active="activeButton == 3"
            @click="handleRowsContainer"
            style="width: 3em"
          >
            <span
              style="font-size: 1.2rem"
              class="mdi mdi-view-column-outline"
            ></span>
          </vs-button>

          <template #tooltip>
            <span
              style="
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                  'Helvetica Neue', sans-serif;
              "
              >Rows blocks</span
            >
          </template>
        </vs-tooltip>
      </div>
      <div class="blocks">
        <div id="blocks" v-show="editor.showBlocks == true"></div>
        <div id="componentBlocks" v-show="editor.showComponents == true"></div>
        <div id="rowBlocks" v-show="editor.showRows == true"></div>
      </div>
    </div>
  </vs-sidebar>
</template>

<script>
import { mapState } from "vuex"
import VueResizable from "vue-resizable"
export default {
  data: () => ({
    activeButton: 1,
  }),

  components: { VueResizable },

  methods: {
    handleBlocksContainer() {
      // if (this.editor.showComponents == true || this.editor.showRows == true) {
      this.editor.showBlocks = true
      this.editor.showComponents = false
      this.editor.showRows = false
      this.activeButton = 1
      // }
    },

    handleComponentsContainer() {
      // if (this.editor.showBlocks == true || this.editor.showRows == true) {
      this.editor.showComponents = true
      this.editor.showRows = false
      this.editor.showBlocks = false
      this.activeButton = 2
      // }
    },

    handleRowsContainer() {
      // if (this.editor.showComponents == true || this.editor.showBlocks == true) {
      this.editor.showRows = true
      this.editor.showComponents = false
      this.editor.showBlocks = false
      this.activeButton = 3
      // }
    },
  },

  computed: {
    ...mapState(["editor"]),
  },
}
</script>

<style scoped>
@import url(../assets/leftPanel.css);
</style>
