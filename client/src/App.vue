<template>
  <div id="nav">
    <router-link to="/">Recipes</router-link> |
    <router-link to="/recipes">Recipe Details</router-link> |
    <router-link to="/add">Add a Recipe</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "app",
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
