<template>
  <vs-dialog
    blur
    scroll
    not-center
    full-screen
    overflow-hidden
    :prevent-close="true"
    class="previewDialoge"
    v-model="template.previewDialog"
  >
    <template #header>
      <h3 class="grey--text text--darken-4" v-for="(design, i) in preview" :key="i">
        {{ design.category[0] }}
      </h3>
    </template>
    <div v-for="(design, i) in preview" :key="i" style="max-height: 90%" class="con-content">
      <div id="html" v-html="design.html"></div>
    </div>
  </vs-dialog>
</template>

<script>
import { mapGetters, mapState } from "vuex"

export default {
  data: () => ({
    active: true,
    input1: "",
    input2: "",
    checkbox1: false,
  }),

  mounted() {
    this.$nextTick(() => {
      
    })
  },

  computed: {
    ...mapState(["template"]),
    ...mapGetters(["preview"]),
  },
}
</script>

<style scoped>
h3 {
  text-transform: capitalize;
}
.con-content #html {
  position: relative;
  display: block;
  font-size: 0.9rem;
  user-select: none;
}
</style>
