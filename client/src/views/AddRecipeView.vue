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
      <!-- add in ingredients here -->
      <div class="form-group">
        <label for="qty">Qty</label>
        <input
          type="text"
          class="form-control"
          id="qty"
          v-model="recipe.recipeIngredientItems[0].measurement_qty"
          name="qty"
        />
        <label for="unit">Unit</label>
        <input
          type="text"
          class="form-control"
          id="unit"
          v-model="recipe.recipeIngredientItems[0].measurement_unit"
          name="unit"
        />
        <label for="ingredient">Ingredient</label>
        <input
          type="text"
          class="form-control"
          id="ingredient"
          v-model="recipe.recipeIngredientItems[0].ingredient"
          name="ingredient"
          required
        />
      </div>

      <div class="form-group">
        <label for="qty2">Qty</label>
        <input
          type="text"
          class="form-control"
          id="qty2"
          v-model="recipe.recipeIngredientItems[1].measurement_qty"
          name="qty"
        />
        <label for="unit2">Unit</label>
        <input
          type="text"
          class="form-control"
          id="unit2"
          v-model="recipe.recipeIngredientItems[1].measurement_unit"
          name="unit"
        />
        <label for="ingredient2">Ingredient</label>
        <input
          type="text"
          class="form-control"
          id="ingredient2"
          v-model="recipe.recipeIngredientItems[1].ingredient"
          name="ingredient"
          required
        />
      </div>
      <div class="form-group">
        <label for="garnish">Garnish</label>
        <input
          type="text"
          class="form-control"
          id="garnish"
          v-model="recipe.garnish"
          name="garnish"
        />
      </div>
      <div class="form-group">
        <label for="glass">Glass</label>
        <input
          type="text"
          class="form-control"
          id="glass"
          v-model="recipe.glass"
          name="glass"
        />
      </div>
      <div class="form-group">
        <label for="instructions">Instructions</label>
        <input
          type="text"
          class="form-control"
          id="instructions"
          v-model="recipe.instructions"
          name="instructions"
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
        <div class="form-group">
          <label for="creator-attribution">Creator Attribution</label>
          <input
            type="text"
            class="form-control"
            id="creator-attribution"
            v-model="recipe.creatorAttribution"
            name="creator-attribution"
          />
        </div>
        <div class="form-group">
          <label for="year-created">Year Created</label>
          <input
            type="text"
            class="form-control"
            id="year-created"
            v-model="recipe.yearCreated"
            name="year-created"
          />
        </div>
        <div class="form-group">
          <label for="other-info"
            >Fun facts or other information about this drink:</label
          >
          <input
            type="textarea"
            class="form-control"
            id="other-info"
            v-model="recipe.otherInfo"
            name="other-info"
          />
        </div>
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
        recipeIngredientItems: [
          {
            measurement_qty: null,
            measurement_unit: "",
            ingredient: "",
          },
          {
            measurement_qty: null,
            measurement_unit: "",
            ingredient: "",
          },
        ],
        garnish: "",
        glass: "",
        instructions: "",
        creatorAttribution: "",
        yearCreated: "",
        otherInfo: "",
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
        // NOTE: may need to update this line due to data modeling changes on server side
        ingredientItems: this.recipe.recipeIngredientItems,
        garnish: this.recipe.garnish,
        glass: this.recipe.glass,
        instructions: this.recipe.instructions,
        creatorAttribution: this.recipe.creatorAttribution,
        yearCreated: this.recipe.yearCreated,
        otherInfo: this.recipe.otherInfo,
        draft: this.recipe.draft,
        published: this.recipe.published,
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
      this.recipe = {
        id: null,
        drinkName: "",
        description: "",
        recipeIngredientItems: [
          {
            measurement_qty: null,
            measurement_unit: "",
            ingredient: "",
          },
          {
            measurement_qty: null,
            measurement_unit: "",
            ingredient: "",
          },
        ],
        garnish: "",
        glass: "",
        instructions: "",
        creatorAttribution: "",
        yearCreated: "",
        otherInfo: "",
        draft: false,
        published: false,
      };
    },
  },
};
</script>
