<template>
  <p>{{ message }}</p>
  <h3>Recipe Not Found</h3>
  <div>
    <router-link to="/recipes"
      >Return to browsing your Little Bar Book for other recipes</router-link
    >
    or <router-link to="/">go to homepage.</router-link>
  </div>
</template>

<script>
export default {
  name: "RecipeNotFound",
  props: {
    message: String,
  },
};
</script>
