<template>
  <SearchBar />
  <div class="home">
    <h3>Homepage</h3>
    <p>
      Welcome to the prototype for Little Bar Book.<br />This project is
      currently in progress.
    </p>
  </div>
</template>

<script>
import SearchBar from "../components/Nav/SearchBar.vue";

export default {
  name: "Home",
  components: { SearchBar },
};
</script>
