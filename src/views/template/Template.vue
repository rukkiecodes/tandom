<template>
  <div class="template">
    <Nav />
    <PageLoad />
    <router-view style="margin-top: 50px" />
  </div>
</template>

<script>
import Nav from "../../components/template/components/Nav.vue"
import PageLoad from "../../components/PageLoad.vue"
export default {
  components: {
    Nav,
    PageLoad
  },
}
</script>
