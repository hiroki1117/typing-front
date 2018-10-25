import Vue from "vue";
import TypingApp from "./TypingApp.vue";
import tstore from "./typing-store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  store: tstore,
  render: h => h(TypingApp)
}).$mount("#app");
