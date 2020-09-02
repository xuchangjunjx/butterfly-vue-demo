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
      this.instance.drageReDraw({
        rankdir: "RB",
        align: "DR",
        nodesep: 30,
        ranksep: 40,
        controlPoints: false
      });
    }
  },
  mounted() {
    this.instance = this.init(this.currentData);
  }
};
</script>
