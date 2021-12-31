<template>
  <vs-sidebar open :square="true" class="leftPanel">
    <div class="layersContainer">
      <div class="layers-container"></div>
    </div>
    <div class="blocksContainer">
      <div class="blocksNav">
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
      </div>
      <div class="blocks">
        <div id="blocks" v-show="editor.showBlocks == true"></div>
        <div id="componentBlocks" v-show="editor.showComponents == true">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          aperiam nostrum animi consequatur pariatur impedit quis aliquam error
          provident in omnis, quas odio nesciunt, porro placeat accusamus?
          Magni, rem nostrum.
        </div>
        <div id="rowBlocks" v-show="editor.showRows == true">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nemo odio, molestias aliquam tempore eligendi distinctio? Tempora est
          alias at architecto atque labore odio iste minus. Magni totam sapiente
          laboriosam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur nemo odio, molestias aliquam tempore eligendi distinctio?
          Tempora est alias at architecto atque labore odio iste minus. Magni
          totam sapiente laboriosam. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur nemo odio, molestias aliquam tempore
          eligendi distinctio? Tempora est alias at architecto atque labore odio
          iste minus. Magni totam sapiente laboriosam.
        </div>
      </div>
    </div>
  </vs-sidebar>
</template>

<script>
import { mapState } from "vuex"
export default {
  data: () => ({
    activeButton: 1,
  }),

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
