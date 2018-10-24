<template>
  <div id="app">
    <typ-header id="header"></typ-header>
    <h1>This is Main Section</h1>
    <typ-footer id="footer"></typ-footer>
  </div>
</template>

<script>
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";

export default {
  name: "app",
  components: {
    typHeader: header,
    typFooter: footer
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
</style>
