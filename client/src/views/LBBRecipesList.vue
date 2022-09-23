<template>
  <SearchBar />
  <header>
    <div>
      <h3>My LBB</h3>
      <h5>Personal Recipes</h5>
    </div>
    <button class="text-btn add-new">
      <!-- TODO: swap to + for mobile -->
      <RouterLink to="/add">Add new recipe</RouterLink>
    </button>
  </header>
  <main class="recipes-container">
    <!-- <h4 class="recipe-sort">
      A<ArrowRightIcon class="hero-icons icon-in-h4" />Z
    </h4> -->
    <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
      <router-link :to="`/recipes/${recipe.id}`" class="table-wrapper">
        <table class="lbb-personal-recipes">
          <tr class="tr-drink-name">
            <th colspan="2">
              <h5>{{ recipe.drinkName }}</h5>
              <div :class="recipe.draft ? 'draft' : 'hidden'">DRAFT</div>
              <EllipsisHorizontalIcon class="hero-icons more-info" />
            </th>
          </tr>
          <tr
            class="tr-ingredient-list"
            v-for="(ingredientItem, i) in recipe.ingredients"
            :key="i"
          >
            <th>{{ ingredientItem.qty }} {{ ingredientItem.unit }}</th>
            <td>{{ ingredientItem.ingredient }}</td>
          </tr>
          <tr class="tr-instructions">
            <th></th>
            <td>
              {{ recipe.instructions }}
            </td>
          </tr>
        </table>
      </router-link>
    </div>
  </main>
</template>

<script>
import SearchBar from "../components/Nav/SearchBar.vue";
import { EllipsisHorizontalIcon } from "@heroicons/vue/24/outline";
// import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";
import RecipeDataService from "../services/RecipeDataService";

export default {
  name: "lbb-recipes-list",
  components: {
    SearchBar,
    EllipsisHorizontalIcon,
    // ArrowRightIcon,
    RouterLink,
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    RecipeDataService.getAll().then((res) => {
      const data = [...res.data];
      // This is really not ideal, update once data normalization is complete
      data.forEach(function (el) {
        el.ingredients = [];
        for (let l = 0; l < 9; l++) {
          if (el[`ingredientItem${l}_Ingredient`]) {
            el.ingredients.push({
              qty: el[`ingredientItem${l}_Qty`],
              unit: el[`ingredientItem${l}_Unit`],
              ingredient: el[`ingredientItem${l}_Ingredient`],
            });
          }
        }
      });

      this.recipes = data;
      // this.recipes = [...res.data];
    });
  },
};
</script>

<style scoped>
header {
  display: flex;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 4rem;
}

a {
  text-decoration: none;
  color: var(--color-text);
}

.add-new {
  height: 6rem;
}

.recipes-container {
  max-width: 40rem;
  margin: 2rem auto;
}

.recipe {
  /* background-color: var(--color-accent-light); */
  margin-bottom: 3rem;
  position: relative;
  width: 100%;
  padding: 0 1rem;
}

.lbb-personal-recipes {
  width: 90%;
  border-spacing: 0 0.2rem;
}

th,
td {
  vertical-align: top;
}

.tr-drink-name {
  position: relative;
  text-align: left;
}

.tr-drink-name th {
  border-bottom: 0.1rem solid var(--color-accent-chartreuse);
}

.tr-drink-name h5 {
  font-weight: 500;
  font-style: italic;
  padding-left: 1rem;
}

.tr-drink-name + .tr-ingredient-list td,
.tr-drink-name + .tr-ingredient-list th {
  padding-top: 0.8rem;
}

.tr-ingredient-list th {
  /* background-color: #777; */
  text-align: right;
  padding-right: 1rem;
  width: 28%;
}

.tr-ingredient-list td {
  /* background-color: #777; */
  text-align: left;
}

.tr-instructions {
  /* background-color: #888; */
  font-weight: 200;
  font-style: italic;
}

.tr-instructions th {
  text-align: right;
  padding-right: 1rem;
}

.tr-instructions td {
  text-align: left;
  padding-right: 2rem;
}

.hidden {
  display: none;
}

.more-info {
  position: absolute;
  right: 1rem;
  top: 0.6rem;
}

.draft {
  position: absolute;
  top: 0.1rem;
  right: 5rem;
  background-color: var(--color-accent-orange);
  color: #fff;
  padding: 0.1rem 0.6rem;
  border-radius: 3rem;
}

@media (max-width: 450px) {
  .lbb-personal-recipes {
    width: 100%;
  }
}
</style>
