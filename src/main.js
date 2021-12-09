import Vue from "vue";
import App from "./App.vue";
import "./assets/iconfont.css";
import "./views/pipeline/style/index.less";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
