<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { Linter } from "eslint";
import { parseForESLint } from "vue-eslint-parser";
import { rules } from "eslint-plugin-vue";

const linter = new Linter();
// @ts-expect-error parseForESLint type error
linter.defineParser("vue-eslint-parser", { parseForESLint });
for (const i of [
  "v-slot-style",
  "no-deprecated-slot-scope-attribute",
  "no-deprecated-filter",
  "v-on-event-hyphenation",
]) {
  linter.defineRule(`vue/${i}`, rules[i]);
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
