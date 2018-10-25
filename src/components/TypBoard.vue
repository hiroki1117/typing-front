<template>
<div>
    <span v-for="(c, index) in codeArry"
    v-bind:key="index"
    v-bind:class="{done: typindex > index}">
    {{  c }}
    <br v-if="c==='\n'">
    </span>
</div>
</template>

<script>
export default {
  data() {
    return {
      orinalcode: `this is Sample`,
      typindex: 0
    };
  },
  created() {
    window.addEventListener("keydown", this.typHandler);
  },
  computed: {
    codeArry() {
      return this.orinalcode.split("");
    }
  },
  methods: {
    typHandler(event) {
      const c1 = this.codeArry[this.typindex];
      if (event.key === c1) {
        this.typindex++;
      }
    }
  }
};
</script>

<style scoped>
div {
  background-color: white;
}

.done {
  color: red;
}
</style>
