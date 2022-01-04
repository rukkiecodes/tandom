<template>
  <div class="template">
    <Nav />
    <router-view style="margin-top: 50px" />
  </div>
</template>

<script>
import Nav from "../../components/template/components/Nav.vue"
export default {
  components: {
    Nav,
  },
}
</script>
