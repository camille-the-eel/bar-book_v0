<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/recipes">Browse Recipes</RouterLink> |
    <RouterLink to="/add">Add a Recipe</RouterLink>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "the-nav",
  components: {
    RouterLink,
  },
};
</script>
