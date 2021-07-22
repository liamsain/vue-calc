<template>
  <div class="display">
    <div class="display__operation">{{ operation }}</div>
    <div class="display__active-figure">{{ activeFigure }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Display",
  props: {
    operation: {
      type: String,
      default: "",
    },
    activeFigure: {
      type: String,
      default: '0',
    },
  },
});
</script>

<style>
.display {
  height: 50px;
  border-radius: 3px;
  border: 1px solid grey;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  margin: 4px;
  text-align: right;
}
.display__active-figure {
  font-size: 24px;
}

.calculator__operation {
  font-size: 14px;
  font-weight: bold;
}
</style>