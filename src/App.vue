<template>
  <div id="app">
    <div class="app__calc-container">
      <Calculator />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Calculator from "./components/Calculator.vue";

export default Vue.extend({
  name: "App",
  components: {
    Calculator,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app__calc-container {
  display: flex;
  justify-content: center;
}
</style>
