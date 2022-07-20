<template>
  <div class="page-container">
    <div class="recipe-details-container">
      <div class="recipe">
        <div class="delete-recipe" @click="deleteRecipe(recipe.id)">X</div>
        <tr class="drink-name-header">
          <th colspan="2">
            {{ recipe.drinkName }}
          </th>
          <div :class="recipe.draft ? 'draft' : 'hidden'">DRAFT</div>
        </tr>
        <tr>
          <td colspan="2">
            {{ recipe.description }}
          </td>
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
        <tr>
          <td colspan="2">
            {{ recipe.yearCreated }}
          </td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDataService from "../services/RecipeDataService";

export default {
  name: "recipe",
  data() {
    return {
      recipe: [],
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    RecipeDataService.get(this.$route.params.id).then(
      (res) => (this.recipe = res.data)
    );
  },
  methods: {},
};
</script>
