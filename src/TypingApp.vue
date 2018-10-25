<template>
  <div id="app">
    <typ-header id="header"></typ-header>
    <div id="main-section" class="columns is-centered">
      <typ-board id="board" class="column is-8"></typ-board>
    </div>    
    <typ-footer id="footer"></typ-footer>
  </div>
</template>

<script>
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";
import TypBoard from "@/components/TypBoard.vue";

export default {
  name: "app",
  components: {
    typHeader: header,
    typFooter: footer,
    typBoard: TypBoard
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  margin: 0px;
  min-height: 100%;
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

#main-section {
}

#board {
  width: 70%;
  height: 700px;
  margin-top: 2em;
}
</style>
