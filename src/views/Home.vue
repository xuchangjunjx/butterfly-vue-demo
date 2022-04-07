<template>
  <div class="home">
    <pipeline id="canvas" ref="canvas" :data="data"></pipeline>
    <button
      style="position:absolute;top:20px;right:20px;z-index:111;"
      @click="reDraw"
    >
      reDraw
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import mockData from "./data.js";
import pipeline from "./pipeline/index.vue";
import hierarchy from "./pipeline/utils/hierarchy";
export default {
  components: {
    pipeline
  },
  name: "Home",
  data() {
    return {
      data: mockData
    };
  },
  methods: {
    reDraw() {
      hierarchy.stratify();
      this.$refs.canvas.redraw();
    }
  }
};
</script>
<style lang="stylus" scoped>
.home{
 height:100vh;
 width:100vw;
}
</style>
