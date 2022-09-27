<template>
  <main>
    <h3>Recipe Not Found</h3>
    <h5 class="success-msg">{{ message }}</h5>
    <button class="text-btn">
      <router-link to="/">Go To Homepage</router-link>
    </button>
    <button class="text-btn view-lbb-btn">
      <router-link to="/recipes">View Bar Book</router-link>
    </button>
  </main>
</template>

<script>
export default {
  name: "RecipeNotFound",
  props: {
    message: String,
  },
};
</script>

<style scoped>
main {
  padding: 1rem;
}

h3 {
  margin-top: 3rem;
}

button {
  margin-top: 2rem;
}
</style>
