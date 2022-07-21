<template>
  <div class="page-container">
    <div class="recipes-container">
      <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
        <!-- <router-link :to="`/recipes/${recipe.drinkName}+${recipe.id}`"> -->
        <router-link :to="`/recipes/${recipe.id}`">
          <tr class="drink-name-header">
            <th colspan="2">
              {{ recipe.drinkName }}
            </th>
            <div :class="recipe.draft ? 'draft' : 'hidden'">DRAFT</div>
          </tr>
          <tr>
            <th>Qty unit</th>
            <td>ingredient {{ recipe.ingredients }}</td>
          </tr>
          <tr>
            <th>Qty unit</th>
            <td>ingredient {{ recipe.ingredients }}</td>
          </tr>
          <tr>
            <th>Qty unit</th>
            <td>ingredient {{ recipe.ingredients }}</td>
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
      this.recipes = [...res.data];
      console.log(res.data);
    });
  },
  methods: {},
};
</script>

<style>
.page-container {
  width: 80%;
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
