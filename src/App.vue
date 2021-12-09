<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
export default {
  components: {
    home: () => import("@/views/Home.vue")
  }
};
</script>
<style lang="less">
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // background-color: #333;
  height: 100%;
}
</style>
