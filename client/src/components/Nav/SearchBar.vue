<template>
  <span class="search-bar-wrapper">
    <label for="search-bar" class="search-bar-label">Search</label>
    <input
      type="text"
      name="search-bar"
      class="search-bar"
      placeholder="Functionality not yet implemented–coming soon!"
    />
    <img src="../../assets/icons/search.svg" class="search-icon" />
  </span>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>
.search-bar-wrapper {
  margin: 0 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.search-bar-label {
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: var(--color-accent-orange);
  font-size: 2.8rem;
}

.search-bar {
  border-radius: 0;
  border: none;
  border-bottom: 0.1rem solid var(--color-accent-orange);
}

.search-icon {
  width: 2.5rem;
}

.search-bar:focus {
  outline: none;
  background: none;
}
</style>
