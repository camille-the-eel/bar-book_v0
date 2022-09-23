<template>
  <TheNav />
  <RouterView />
</template>

<script>
import TheNav from "@/components/Nav/TheNav.vue";
import { RouterView } from "vue-router";

export default {
  name: "app",
  components: {
    TheNav,
    RouterView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import "../src/assets/reset.css";
@import "../src/assets/base.css";
@import "../src/assets/input.css";
@import "../src/assets/table.css";
</style>
