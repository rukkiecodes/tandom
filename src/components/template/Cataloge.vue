<template>
  <div class="cataloge">
    <div class="cardRows">
      <vs-card class="card" v-for="(design, i) in templates" :key="i">
        <template #text>
          <img :src="design.image" alt="" />
          <div class="label">
            <i class="las la-envelope"></i>
          </div>
          <div class="overlay">
            <span class="type">Free Email Template</span>
            <span class="title">{{ design.category }}</span>
            <vs-button
              @click="previewTemplate(design)"
              class="overlayButton"
              color="#737373"
              size="small"
            >
              Preview
            </vs-button>
            <vs-button class="overlayButton" size="small">
              Get Started
            </vs-button>
          </div>
        </template>
      </vs-card>
    </div>
    <Preview />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import Preview from "./components/Preview.vue"
// @ts-nocheck
export default {
  components: {
    Preview,
  },
  mounted() {
    this.$nextTick(() => {
      this.getTamplates()
    })
  },
  methods: {
    ...mapActions(["getTamplates", "previewTemplate"]),
  },
  computed: {
    ...mapGetters(["templates"]),
    ...mapState(["template"]),
  },
}
</script>

<style scoped>
@import url(./assets/cataloge.css);
</style>
