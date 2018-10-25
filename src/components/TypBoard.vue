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
      orinalcode: `this is Sample.
How are you`,
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
      event.preventDefault();
      const c = this.codeArry[this.typindex];
      const key = event.key === "Enter" ? "\n" : event.key;
      if (key === c) {
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
