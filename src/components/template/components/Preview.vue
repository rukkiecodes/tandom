<template>
  <vs-dialog
    class="previewDialoge"
    scroll
    overflow-hidden
    auto-width
    :blur="true"
    :prevent-close="true"
    v-model="template.previewDialog"
  >
    <template #header>
      <h3 v-for="(design, i) in previewTemplate" :key="i">
        {{ design.category }}
      </h3>
    </template>
    <div class="con-content">
      <div id="html" v-html="template.previewTemplateHtml"></div>
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

  computed: {
    ...mapState(["template"]),
    ...mapGetters(["previewTemplate"]),
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
