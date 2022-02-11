<template>
  <v-app>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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
@import url(./assets/icon/css/materialdesignicons.min.css);
@import url(./assets/icon2/css/line-awesome.min.css);

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
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
