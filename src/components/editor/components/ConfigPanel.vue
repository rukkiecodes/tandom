<template>
  <vs-sidebar v-model="active" open right :square="true" class="configPanel">
    <div class="styles-container">
      <div class="traitsContainer">
        <div class="traits-container"></div>
      </div>
      <div class="class-container"></div>
    </div>
  </vs-sidebar>
</template>

<script>
export default {
  data: () => ({
    active: "home",
  }),
}
</script>

<style scoped>
@import url(../assets/configPanel.css);
</style>
