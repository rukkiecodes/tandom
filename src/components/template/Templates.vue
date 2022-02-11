<template>
  <div class="template">
    <div class="cardRows">
      <vs-card class="card" v-for="(design, i) in displayDesigns" :key="i">
        <template #text>
          <img :src="`http://localhost:3000/${design.image}`" alt="" />
          <div class="label">
            <i class="las la-envelope"></i>
          </div>
          <div class="overlay">
            <span class="type"></span>
            <span class="title text-body-1 font-weight-bold text--uppercase">{{
              design.category[0]
            }}</span>
            <vs-button
              @click="previewDesign(design)"
              class="overlayButton"
              color="#737373"
              size="small"
            >
              Preview
            </vs-button>
            <vs-button
              @click="editTemplate(design)"
              class="overlayButton"
              size="small"
            >
              Get Started
            </vs-button>
          </div>
        </template>
      </vs-card>
    </div>

    <div class="paginationWraper d-flex justify-center">
      <!-- <vs-pagination not-margin v-model="page" :length="pages.length" /> -->
      <vs-button :disabled="page <= 1" @click="page--" icon>
        <i class="las la-angle-double-left"></i>
      </vs-button>
      <vs-button
        :key="i"
        @click="page = pageNumber"
        v-for="(pageNumber, i) in pages.slice(page - 1, page + 5)"
      >
        {{ pageNumber }}
      </vs-button>
      <vs-button
        icon
        @click="page++"
        :disabled="page >= Math.ceil(designs.length / perPage)"
      >
        <i class="las la-angle-double-right"></i>
      </vs-button>
    </div>
    <Preview />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  data: () => ({
    page: 1,
    perPage: 9,
    pages: [],
    value: "",
  }),

  components: {
    Preview: () => import("./components/Preview.vue")
  },

  watch: {
    designs() {
      this.setPages()
    },
  },

  methods: {
    ...mapActions(["previewDesign"]),

    setPages() {
      let number_of_pages = Math.ceil(
        this.$store.getters.designs.length / this.perPage
      )
      for (let index = 1; index <= number_of_pages; index++) {
        this.pages.push(index)
      }
    },

    paginate(designs) {
      let page = this.page
      let perPage = this.perPage
      let from = page * perPage - perPage
      let to = page * perPage
      return designs.slice(from, to)
    },
  },

  computed: {
    ...mapGetters(["designs"]),

    displayDesigns() {
      return this.paginate(this.$store.getters.designs)
    },
  },
}
</script>

<style scoped>
@import url(./assets/templates.css);
</style>
