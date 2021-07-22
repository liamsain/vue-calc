<template>
  <div>
    <div
      class="keypad__row"
      v-for="(keyRow, rowIndex) in keys"
      :key="rowIndex"
    >
      <button
        class="keypad__key"
        v-for="(key, keyIndex) in keyRow"
        :key="keyIndex"
        :id="'keypad__key-' + key"
        @click="$emit('keypress', key)"
      >
        {{ key }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Keypad",
  props: {
    keys: {
      type: Array
    }
  },
  mounted() {
    document.addEventListener("keydown", this.keyDown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.keyDown);
  },
  methods: {
    keyDown(ev: KeyboardEvent) {
      this.$emit('keypress', ev.key);
    }
  },

});
</script>

<style>
.keypad__row {
  display: flex;
}
.keypad__key {
  margin: 4px;
  padding: 12px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}
</style>