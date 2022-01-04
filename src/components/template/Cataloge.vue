<template>
  <div class="cataloge">
    <div class="cardRows">
      <vs-card class="card" v-for="(design, i) in displayedTemplates" :key="i">
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

    <div class="paginationWraper">
      <vs-pagination progress not-margin v-model="page" :length="pages.length" />
      <!-- <vs-button :disabled="page <= 1" @click="page--" icon>
        <i class="las la-angle-double-left"></i>
      </vs-button>
      <vs-button
        v-for="(pageNumber, i) in pages.slice(page - 1, page + 5)"
        :key="i"
        @click="page = pageNumber"
      >
        {{ pageNumber }}
      </vs-button>
      <vs-button
        :disabled="page >= Math.ceil(templates.length / perPage)"
        @click="page++"
        icon
      >
        <i class="las la-angle-double-right"></i>
      </vs-button> -->
    </div>
    <Preview />
  </div>
</template>

<script>
// @ts-nocheck
import { mapActions, mapGetters, mapState } from "vuex"
import Preview from "./components/Preview.vue"
export default {
  data: () => ({
    page: 1,
    perPage: 9,
    pages: [],
  }),

  components: {
    Preview,
  },

  watch: {
    templates() {
      this.setPages()
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.getTamplates()
    })
  },

  methods: {
    ...mapActions(["getTamplates", "previewTemplate"]),

    setPages() {
      let number_of_pages = Math.ceil(
        this.$store.getters.templates.length / this.perPage
      )
      for (let index = 1; index <= number_of_pages; index++) {
        this.pages.push(index)
      }
    },

    paginate(templates) {
      let page = this.page
      let perPage = this.perPage
      let from = page * perPage - perPage
      let to = page * perPage
      return templates.slice(from, to)
    },
  },

  computed: {
    ...mapGetters(["templates"]),
    ...mapState(["template"]),

    displayedTemplates() {
      return this.paginate(this.$store.getters.templates)
    },
  },
}
</script>

<style scoped>
@import url(./assets/cataloge.css);
</style>
