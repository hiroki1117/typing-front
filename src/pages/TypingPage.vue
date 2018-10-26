<template>
  <div id="typ-page">
    <typ-header id="header"></typ-header>
    <div class="columns is-mobile is-centered">
      <typ-app id="board" class="column is-8"></typ-app>
    </div>    
    <typ-footer id="footer"></typ-footer>
  </div>
</template>

<script>
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";
import TypApp from "@/components/TypApp.vue";

export default {
  components: {
    typHeader: header,
    typFooter: footer,
    typApp: TypApp
  }
};
</script>

<style lang="scss">
#typ-page {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 10px;
  color: #2c3e50;
  background-color: whitesmoke;
}
html,
body {
  margin: 0px;
  height: 100%;
  background-color: whitesmoke;
}

#header {
  width: 100%;
}

#footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 2em;
}

#board {
  width: 70%;
  margin-top: 2em;
}
</style>
