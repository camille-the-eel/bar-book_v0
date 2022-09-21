<template>
  <div class="page-container">
    <div class="recipes-container">
      <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
        <router-link :to="`/recipes/${recipe.id}`">
          <tr class="drink-name-header">
            <th colspan="2">
              {{ recipe.drinkName }}
            </th>
            <div :class="recipe.draft ? 'draft' : 'hidden'">DRAFT</div>
          </tr>
          <tr
            class="ingredient-list"
            v-for="(ingredientItem, i) in recipe.ingredients"
            :key="i"
          >
            <th>{{ ingredientItem.qty }} {{ ingredientItem.unit }}</th>
            <td>{{ ingredientItem.ingredient }}</td>
          </tr>
          <tr>
            <td colspan="2">
              {{ recipe.instructions }}
            </td>
          </tr>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDataService from "../services/RecipeDataService";

export default {
  name: "recipes-list",
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

<style>
.page-container {
  width: 100%;
  margin: 0 auto;
}

.recipes-container {
  max-width: 600px;
  margin: 20px auto;
}

.recipe {
  background-color: #999;
  margin-bottom: 20px;
  position: relative;
}

a {
  text-decoration: none;
  color: black;
}

.drink-name-header {
  position: relative;
}

.hidden {
  display: none;
}

.draft {
  background-color: goldenrod;
  /* position: absolute; */
}

.delete-recipe {
  position: absolute;
  right: 0;
}
</style>
