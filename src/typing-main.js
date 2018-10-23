import Vue from "vue";
import TypingApp from "./TypingApp.vue";
import tstore from "./typing-store";

Vue.config.productionTip = false;

new Vue({
  store: tstore,
  render: h => h(TypingApp)
}).$mount("#app");
