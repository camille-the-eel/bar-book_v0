<template>
  <h3>Add your recipe</h3>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="drink-name">Drink Name</label
        ><input
          type="text"
          class="form-control"
          id="drink-name"
          required
          v-model.trim="recipe.drinkName"
          name="drink-name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label
        ><input
          type="text"
          class="form-control"
          id="description"
          v-model.trim="recipe.description"
          name="description"
        />
      </div>
      <div class="form-group">
        <label for="qty0">Qty</label>
        <input
          type="text"
          class="form-control"
          id="qty"
          v-model.trim="recipe.recipeIngredientItems[0].measurement_qty"
          name="qty0"
        />
        <label for="unit0">Unit</label>
        <input
          type="text"
          class="form-control"
          id="unit"
          v-model.trim="recipe.recipeIngredientItems[0].measurement_unit"
          name="unit0"
        />
        <label for="ingredient0">Ingredient</label>
        <input
          type="text"
          class="form-control"
          id="ingredient"
          v-model.trim="recipe.recipeIngredientItems[0].ingredient"
          name="ingredient0"
          required
        />
      </div>

      <div class="form-group">
        <label for="qty1">Qty</label>
        <input
          type="text"
          class="form-control"
          id="qty1"
          v-model.trim="recipe.recipeIngredientItems[1].measurement_qty"
          name="qty1"
        />
        <label for="unit1">Unit</label>
        <input
          type="text"
          class="form-control"
          id="unit1"
          v-model.trim="recipe.recipeIngredientItems[1].measurement_unit"
          name="unit1"
        />
        <label for="ingredient1">Ingredient</label>
        <input
          type="text"
          class="form-control"
          id="ingredient1"
          v-model.trim="recipe.recipeIngredientItems[1].ingredient"
          name="ingredient1"
          required
        />
      </div>
      <div class="form-group">
        <label for="qty2">Qty</label>
        <input
          type="text"
          class="form-control"
          id="qty2"
          v-model.trim="recipe.recipeIngredientItems[2].measurement_qty"
          name="qty2"
        />
        <label for="unit2">Unit</label>
        <input
          type="text"
          class="form-control"
          id="unit2"
          v-model.trim="recipe.recipeIngredientItems[2].measurement_unit"
          name="unit2"
        />
        <label for="ingredient2">Ingredient</label>
        <input
          type="text"
          class="form-control"
          id="ingredient2"
          v-model.trim="recipe.recipeIngredientItems[2].ingredient"
          name="ingredient2"
          required
        />
      </div>
      <div class="form-group">
        <label for="qty3">Qty</label>
        <input
          type="text"
          class="form-control"
          id="qty3"
          v-model.trim="recipe.recipeIngredientItems[3].measurement_qty"
          name="qty3"
        />
        <label for="unit3">Unit</label>
        <input
          type="text"
          class="form-control"
          id="unit3"
          v-model.trim="recipe.recipeIngredientItems[3].measurement_unit"
          name="unit3"
        />
        <label for="ingredient3">Ingredient</label>
        <input
          type="text"
          class="form-control"
          id="ingredient3"
          v-model.trim="recipe.recipeIngredientItems[3].ingredient"
          name="ingredient3"
          required
        />
      </div>
      <div class="form-group">
        <label for="qty4">Qty</label>
        <input
          type="text"
          class="form-control"
          id="qty4"
          v-model.trim="recipe.recipeIngredientItems[4].measurement_qty"
          name="qty4"
        />
        <label for="unit4">Unit</label>
        <input
          type="text"
          class="form-control"
          id="unit4"
          v-model.trim="recipe.recipeIngredientItems[4].measurement_unit"
          name="unit4"
        />
        <label for="ingredient4">Ingredient</label>
        <input
          type="text"
          class="form-control"
          id="ingredient4"
          v-model.trim="recipe.recipeIngredientItems[4].ingredient"
          name="ingredient4"
          required
        />
      </div>

      <div class="form-group">
        <label for="qty5">Qty</label>
        <input
          type="text"
          class="form-control"
          id="qty5"
          v-model.trim="recipe.recipeIngredientItems[5].measurement_qty"
          name="qty5"
        />
        <label for="unit5">Unit</label>
        <input
          type="text"
          class="form-control"
          id="unit5"
          v-model.trim="recipe.recipeIngredientItems[5].measurement_unit"
          name="unit5"
        />
        <label for="ingredient5">Ingredient</label>
        <input
          type="text"
          class="form-control"
          id="ingredient5"
          v-model.trim="recipe.recipeIngredientItems[5].ingredient"
          name="ingredient5"
        />
      </div>
      <div class="form-group">
        <label for="qty6">Qty</label>
        <input
          type="text"
          class="form-control"
          id="qty6"
          v-model.trim="recipe.recipeIngredientItems[6].measurement_qty"
          name="qty6"
        />
        <label for="unit6">Unit</label>
        <input
          type="text"
          class="form-control"
          id="unit6"
          v-model.trim="recipe.recipeIngredientItems[6].measurement_unit"
          name="unit6"
        />
        <label for="ingredient6">Ingredient</label>
        <input
          type="text"
          class="form-control"
          id="ingredient6"
          v-model.trim="recipe.recipeIngredientItems[6].ingredient"
          name="ingredient6"
        />
      </div>
      <div class="form-group">
        <label for="qty7">Qty</label>
        <input
          type="text"
          class="form-control"
          id="qty7"
          v-model.trim="recipe.recipeIngredientItems[7].measurement_qty"
          name="qty7"
        />
        <label for="unit7">Unit</label>
        <input
          type="text"
          class="form-control"
          id="unit7"
          v-model.trim="recipe.recipeIngredientItems[7].measurement_unit"
          name="unit7"
        />
        <label for="ingredient7">Ingredient</label>
        <input
          type="text"
          class="form-control"
          id="ingredient7"
          v-model.trim="recipe.recipeIngredientItems[7].ingredient"
          name="ingredient7"
        />
      </div>
      <div class="form-group">
        <label for="qty8">Qty</label>
        <input
          type="text"
          class="form-control"
          id="qty8"
          v-model.trim="recipe.recipeIngredientItems[8].measurement_qty"
          name="qty8"
        />
        <label for="unit8">Unit</label>
        <input
          type="text"
          class="form-control"
          id="unit8"
          v-model.trim="recipe.recipeIngredientItems[8].measurement_unit"
          name="unit8"
        />
        <label for="ingredient8">Ingredient</label>
        <input
          type="text"
          class="form-control"
          id="ingredient8"
          v-model.trim="recipe.recipeIngredientItems[8].ingredient"
          name="ingredient8"
        />
      </div>

      <div class="form-group">
        <label for="garnish">Garnish</label>
        <input
          type="text"
          class="form-control"
          id="garnish"
          v-model.trim="recipe.garnish"
          name="garnish"
        />
      </div>
      <div class="form-group">
        <label for="glass">Glass</label>
        <input
          type="text"
          class="form-control"
          id="glass"
          v-model.trim="recipe.glass"
          name="glass"
        />
      </div>
      <div class="form-group">
        <label for="instructions">Instructions</label>
        <textarea
          type="text"
          class="form-control"
          id="instructions"
          v-model.trim="recipe.instructions"
          name="instructions"
        ></textarea>
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
            v-model.trim="recipe.creatorAttribution"
            name="creator-attribution"
          />
        </div>
        <div class="form-group">
          <label for="year-created">Year Created</label>
          <input
            type="text"
            class="form-control"
            id="year-created"
            v-model.trim="recipe.yearCreated"
            name="year-created"
          />
        </div>
        <div class="form-group">
          <label for="other-info"
            >Fun facts or other information about this drink:</label
          >
          <textarea
            type="textarea"
            class="form-control"
            id="other-info"
            v-model.trim="recipe.otherInfo"
            name="other-info"
          ></textarea>
        </div>
        <br />
        <!-- <span class="draft-disclaimer"
          >Draft recipes will be saved to your personal bar book, but cannot be
          published to the public page until updated as finalized.</span
        > -->
      </div>
      <br />
      <button @click="saveRecipe" class="success-btn">Add Recipe</button>
      <br />
      <span class="add-disclaimer-1"
        >Does not publish recipe. Adds to personal book only.</span
      >
    </div>
    <div v-else>
      <h4>You have successfully added the recipe to your personal book!</h4>
      <button class="add-more-btn" @click="newRecipe">Add Another</button>
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

<style scoped>
.form-group {
  margin-bottom: 7px;
}

label {
  margin: 0 5px;
}
</style>
