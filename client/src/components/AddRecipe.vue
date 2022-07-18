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
        <label for="instructions">Instructions</label>
        <input
          class="form-control"
          id="instructions"
          required
          v-model="recipe.instructions"
          name="instructions"
        />
        <button @click="saveRecipe" class="success-button">Add Recipe</button>
        <span class="add-disclaimer-1"
          >Does not publish recipe. Adds to personal book only.</span
        >
      </div>
    </div>
    <div v-else>
      <h4>You have successfully added the recipe to your personal book!</h4>
      <button class="add-more-button" @click="newRecipe">Add</button>
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
        instructions: "",
        published: false,
      },
      submitted: false,
    };
  },
  mounted() {
    RecipeDataService.getAll().then((res) => console.log("get", res));
  },
  methods: {
    saveRecipe() {
      let data = {
        drinkName: this.recipe.drinkName,
        instructions: this.recipe.instructions,
      };
      RecipeDataService.create(data)
        .then((res) => {
          this.recipe.id = res.data.id;
          console.log(res.data);
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
