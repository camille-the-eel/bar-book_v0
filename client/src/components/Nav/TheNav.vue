<template>
  <nav>
    <!-- TODO: smaller in mobile -->
    <RouterLink to="/" class="nav-link nav-logotype"
      ><h4 class="nav-title">Little Bar Book</h4></RouterLink
    >
    <button class="nav-link">
      <img src="../../assets/icons/stars_filled.svg" class="nav-icon" />
    </button>
    <button class="nav-link">
      <img src="../../assets/icons/portrait_filled.svg" class="nav-icon" />
    </button>
    <RouterLink to="/recipes" class="nav-link">
      <img
        src="../../assets/icons/lbb_chartreuse_1.png"
        class="nav-icon lbb-book-icon"
    /></RouterLink>
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

<style scoped>
nav {
  /* border-bottom: solid 0.1rem var(--color-accent-orange); */
  /* padding-bottom: 0.8rem; */
  margin: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
}

.nav-logotype {
  padding-left: 1.6rem;
  flex-grow: 6;
  text-align: left;
}
.nav-link {
  border: none;
  background: none;
}
.nav-icon {
  width: 3rem;
}

.lbb-book-icon {
  margin-top: 1rem;
  margin-right: 1rem;
  width: 4rem;
}

.search-icon {
  width: 3rem;
}
</style>
