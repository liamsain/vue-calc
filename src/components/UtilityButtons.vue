<template>
  <div class="utility-buttons">
    <button
      class="utility-buttons__button"
      @click="$emit('clear')"
      title="Esc/c"
    >
      Clear
    </button>
    <button class="utility-buttons__button" @click="$emit('backspace')">
      Backspace
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UtilityButtons",
});
</script>

<style>
.utility-buttons {
  display: flex;
  justify-content: flex-end;
  margin: 4px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.utility-buttons__button{
  font-size: 16px;
  margin-left: 8px;
}
</style>