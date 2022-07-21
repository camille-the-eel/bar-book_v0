<template>
  <h3>Update and expand this form, sheeeeh.</h3>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="drink-name">Drink Name</label
        ><input
          type="text"
          class="form-control"
          id="drink-name"
          required
          v-model="recipe.drinkName"
          name="drink-name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label
        ><input
          type="text"
          class="form-control"
          id="description"
          v-model="recipe.description"
          name="description"
        />
      </div>
      <div class="form-group">
        <label for="instructions">Instructions</label>
        <input
          class="form-control"
          id="instructions"
          v-model="recipe.instructions"
          name="instructions"
        />
      </div>
      <div class="form-group">
        <label for="ingredient">Ingredient</label>
        <input
          class="form-control"
          id="ingredient"
          required
          v-model="recipe.ingredient"
          name="ingredient"
        />
      </div>
      <div class="form-group">
        <label for="draft">Tag this recipe as a draft?</label
        ><input
          type="checkbox"
          class="form-control"
          id="draft"
          v-model="recipe.draft"
          name="draft"
        />
        <br />
        <!-- <span class="draft-disclaimer"
          >Draft recipes will be saved to your personal bar book, but cannot be
          published to the public page until updated as finalized.</span
        > -->
      </div>
      <br />
      <button @click="saveRecipe" class="success-button">Add Recipe</button>
      <br />
      <span class="add-disclaimer-1"
        >Does not publish recipe. Adds to personal book only.</span
      >
    </div>
    <div v-else>
      <h4>You have successfully added the recipe to your personal book!</h4>
      <button class="add-more-button" @click="newRecipe">Add Another</button>
    </div>
  </div>
</template>

<script>
import RecipeDataService from "../services/RecipeDataService";
export default {
  name: "add-recipe",
  data() {
    return {
      recipe: {
        id: null,
        drinkName: "",
        description: "",
        instructions: "",
        ingredient: "",
        draft: false,
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveRecipe() {
      let data = {
        drinkName: this.recipe.drinkName,
        description: this.recipe.description,
        instructions: this.recipe.instructions,
        ingredient: this.recipe.ingredient,
        draft: this.recipe.draft,
      };
      RecipeDataService.create(data)
        .then((res) => {
          this.recipe.id = res.data.id;
          console.log("DATA", res.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log("AddRecipe error catch:", e.response);
        });
    },
    newRecipe() {
      this.submitted = false;
      this.recipe = {};
    },
  },
};
</script>
