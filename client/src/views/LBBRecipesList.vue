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
  <main class="recipes-list-container">
    <!-- <h4 class="recipe-sort">
      A<ArrowRightIcon class="hero-icons icon-in-h4" />Z
    </h4> -->
    <div v-if="!recipes[0]">
      You have no recipes in your Little Bar Book! <br />Start by adding a
      recipe.
    </div>
    <div
      v-else
      class="recipe-wrapper"
      v-for="recipe in recipes"
      :key="recipe.id"
    >
      <router-link :to="`/recipes/${recipe.id}`" class="table-wrapper">
        <table class="lbb-recipes personal-recipes">
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
            <th :class="i === 0 ? 'th-first-ingredient' : ''">
              {{ ingredientItem.qty }} {{ ingredientItem.unit }}
            </th>
            <td :class="i === 0 ? 'td-first-ingredient' : ''">
              {{ ingredientItem.ingredient }}
            </td>
          </tr>
          <tr class="tr-instructions tr-details">
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
</style>
