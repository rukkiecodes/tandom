<template>
  <div class="cataloge">
    <div class="cardRows">
      <vs-card class="card" v-for="(template, i) in templates" :key="i">
        <template #text>
          <img :src="template.image" alt="" />
          <div class="label">
            <i class="las la-envelope"></i>
          </div>
          <div class="overlay">
            <span class="type">Free Email Template</span>
            <span class="title">Title of Template</span>
            <vs-button class="overlayButton" color="#737373" size="small"> Preview </vs-button>
            <vs-button class="overlayButton" size="small"> Get Started </vs-button>
          </div>
        </template>
      </vs-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// @ts-nocheck
export default {
  mounted() {
    this.$nextTick(() => {
      this.getTamplates()
    })
  },
  methods: {
    ...mapActions(["getTamplates"])
  },
  computed: {
    ...mapGetters(["templates"])
  }
}
</script>

<style scoped>
@import url(./assets/cataloge.css);
</style>
