<template>
  <div id="canvas" class="butterfly-layout"></div>
</template>
<script>
import init from "./utils/render";
export default {
  name: "pipeline",
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      currentData: this.data,
      instance: {}
    };
  },
  methods: {
    init,
    redraw() {
      console.log(this.instance);
      this.instance.autoLayout(
        this.instance.layout.type,
        this.instance.layout.options
      );
    }
  },
  mounted() {
    this.instance = this.init(this.currentData);
  }
};
</script>
