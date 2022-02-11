<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue"
export default {
  name: "App",
  created() {
    Vue.prototype.$vs = this.$vs
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url(./assets/icon/css/materialdesignicons.min.css);
@import url(./assets/icon2/css/line-awesome.min.css);

html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>