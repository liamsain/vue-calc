<template>
  <div>
    <UtilityButtons @backspace="onBackspace" @clear="onClear" />
    <Display :operation="operation" :activeFigure="activeFigure" />
    <Keypad :keys="keys" @keypress="handleKeyPress" />
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import Keypad from "./Keypad.vue";
import Display from "./Display.vue";
import UtilityButtons from "./UtilityButtons.vue";
const MaxOperationStringLength = 10;
import { calculate } from "./calc";
const OperatorChars = ["*", "-", "+", "=", "/"];
const SpecialKeys = ["Backspace", "Enter", "c", "Escape"];
export default Vue.extend({
  name: "Calculator",
  components: { Keypad, Display, UtilityButtons },
  props: {
    msg: String,
  },
  data() {
    return {
      keys: [
        ["7", "8", "9", OperatorChars[0]],
        ["4", "5", "6", OperatorChars[1]],
        ["1", "2", "3", OperatorChars[2]],
        [OperatorChars[4], "0", ".", OperatorChars[3]],
      ],
      firstOperand: "0",
      secondOperand: "",
      operator: "",
      result: "",
    };
  },
  computed: {
    flattenedKeys(): string[] {
      return this.keys.flat();
    },
    operation(): string {
      let op = `${this.firstOperand} ${this.operator} ${this.secondOperand} ${
        this.result.length ? "=" : ""
      }`;
      return op;
    },
    activeFigure(): string {
      if (this.result.length) {
        return this.result;
      } else if (this.secondOperand.length) {
        return this.secondOperand;
      } else {
        return this.firstOperand;
      }
    },
  },
  methods: {
    onBackspace() {
      // if result, make result first operand, clear second and result
      if (this.result.length) {
        this.firstOperand = this.result;
        this.secondOperand = '';
        this.operator = '';
      }
    },
    onClear() {
      this.firstOperand = "0";
      this.secondOperand = "";
      this.operator = "";
      this.result = "";
    },
    handleOperatorKey(key: string) {
      if (key === "=") {
        this.calculateResult();
        return;
      }
      this.operator = key;
      if (this.result.length) {
        this.firstOperand = this.result;
        this.secondOperand = "";
        this.result = "";
      }
    },
    handleNumberKey(key: string) {
      if (this.result.length) {
        this.firstOperand = key;
        this.result = '';
        this.secondOperand = '';
        this.operator = '';
        return;
      }
      if (this.operator.length) {
        if (key !== ".") {
          this.secondOperand = parseFloat(this.secondOperand + key).toString();
        } else {
          this.secondOperand += key;
        }
      } else {
        if (key !== ".") {
          this.firstOperand = parseFloat(this.firstOperand + key).toString();
        } else {
          this.firstOperand += key;
        }
      }
    },
    handleSpecialKey(key: string) {
      if (key === "Backspace") {
        this.onBackspace();
      } else if (key === "Enter") {
        this.calculateResult();
      } else if (key === "c" || key === "Escape") {
        this.onClear();
      }
    },
    handleKeyPress(key: string) {
      if (this.flattenedKeys.includes(key)) {
        if (OperatorChars.includes(key)) {
          this.handleOperatorKey(key);
        } else {
          this.handleNumberKey(key);
        }
      } else if (SpecialKeys.includes(key)) {
        this.handleSpecialKey(key);
      }
    },
    calculateResult() {
      const result: number = calculate(
        Number(this.firstOperand),
        Number(this.secondOperand),
        this.operator
      );
      this.result = result.toString();
    },
  },
});
</script>

<style >
</style>
