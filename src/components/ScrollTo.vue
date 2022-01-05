<template>
  <transition name="fade" mode="out-in">
    <vs-button v-show="showScroll" @click="scroll" class="scrollToTop" icon>
      <i class="las la-angle-up"></i>
    </vs-button>
  </transition>
</template>

<script>
export default {
  data: () => ({
    showScroll: false,
  }),

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 200) {
          this.showScroll = true
        } else {
          this.showScroll = false
        }
      })
    })
  },

  methods: {
    scroll() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style scoped>
.scrollToTop {
  position: fixed;
  bottom: 2%;
  right: 2%;
  transition: all 0.25s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
  bottom: 2%;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  bottom: 0;
}
</style>
