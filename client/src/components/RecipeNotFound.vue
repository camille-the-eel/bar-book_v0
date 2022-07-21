<template>
  <h3>Recipe Not Found</h3>
  <p>{{ message }}</p>
</template>

<script>
export default {
  name: "RecipeNotFound",
  props: {
    message: String,
  },
};
</script>
