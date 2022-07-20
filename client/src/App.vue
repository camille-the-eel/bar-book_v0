<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/recipes">Browse Recipes</RouterLink> |
    <RouterLink to="/add">Add a Recipe</RouterLink>
  </nav>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "app",
  components: {
    RouterLink,
    RouterView,
  },
  methods: {
    check() {
      console.log("clicked");
    },
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
</style>
