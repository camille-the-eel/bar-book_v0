<template>
  <div class="recipe-details-container">
    <h3>EDIT COMPONENT</h3>
    <button class="exit-edit-btn" @click="exitEditModeClick()">X</button>
    <div class="recipe-edit-form">
      <div class="form-group">
        <label for="drink-name">Drink Name</label
        ><input
          type="text"
          class="form-control"
          id="drink-name"
          required
          :value="recipe.drinkName"
          @input="(e) => (updatedRecipe.drinkName = e.target.value)"
          name="drink-name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label
        ><input
          type="text"
          class="form-control"
          id="description"
          :value="recipe.description"
          @input="(e) => (updatedRecipe.description = e.target.value)"
          name="description"
        />
      </div>
      <div
        class="form-group"
        v-for="(ingredientItem, i) in this.localRecipeIngredients"
        :key="i"
      >
        <label :for="`qty${i}`">Qty</label>
        <input
          type="text"
          class="form-control"
          :id="`qty${i}`"
          :value="ingredientItem.qty"
          @input="
            (e) => (updatedRecipe[`ingredientItem${i}_Qty`] = e.target.value)
          "
          name="qty"
        />
        <label :for="`unit${i}`">Unit</label>
        <input
          type="text"
          class="form-control"
          :id="`unit${i}`"
          :value="ingredientItem.unit"
          @input="
            (e) => (updatedRecipe[`ingredientItem${i}_Unit`] = e.target.value)
          "
          name="unit"
        />
        <label :for="`ingredient${i}`">Ingredient</label>
        <input
          type="text"
          class="form-control"
          :id="`ingredient${i}`"
          :value="ingredientItem.ingredient"
          @input="
            (e) =>
              (updatedRecipe[`ingredientItem${i}_Ingredient`] = e.target.value)
          "
          name="ingredient"
          required
        />
        <button class="delete-ingredient-btn" @click="deleteIngredientField(i)">
          X
        </button>
      </div>
      <button class="add-ingredient-btn" @click="addIngredientField">
        Add an ingredient
      </button>
      <div class="form-group">
        <label for="garnish">Garnish</label>
        <input
          type="text"
          class="form-control"
          id="garnish"
          :value="recipe.garnish"
          @input="(e) => (updatedRecipe.garnish = e.target.value)"
          name="garnish"
        />
      </div>
      <div class="form-group">
        <label for="glass">Glass</label>
        <input
          type="text"
          class="form-control"
          id="glass"
          :value="recipe.glass"
          @input="(e) => (updatedRecipe.glass = e.target.value)"
          name="glass"
        />
      </div>
      <div class="form-group">
        <label for="instructions">Instructions</label>
        <textarea
          type="text"
          class="form-control"
          id="instructions"
          :value="recipe.instructions"
          @input="(e) => (updatedRecipe.instructions = e.target.value)"
          name="instructions"
        ></textarea>
      </div>
      <!-- TODO: default value should be set to recipe.draft, when true, checked -->
      <div class="form-group">
        <!-- <label for="draft">Tag this recipe as a draft?</label
        ><input
          type="checkbox"
          class="form-control"
          id="draft"
          :checked="recipe.draft"
          v-model="updatedRecipe.draft"
          name="draft"
        /> -->
        <div class="form-group">
          <label for="creator-attribution">Creator Attribution</label>
          <input
            type="text"
            class="form-control"
            id="creator-attribution"
            :value="recipe.creatorAttribution"
            @input="(e) => (updatedRecipe.creatorAttribution = e.target.value)"
            name="creator-attribution"
          />
        </div>
        <div class="form-group">
          <label for="year-created">Year Created</label>
          <input
            type="text"
            class="form-control"
            id="year-created"
            :value="recipe.yearCreated"
            @input="(e) => (updatedRecipe.yearCreated = e.target.value)"
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
            :value="recipe.otherInfo"
            @input="(e) => (updatedRecipe.otherInfo = e.target.value)"
            name="other-info"
          ></textarea>
        </div>
        <br />
      </div>
      <button
        class="update-recipe-btn"
        @click="saveEditsClick(recipe.id, this.updatedRecipe)"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeEditForm",
  props: {
    recipe: Object,
  },
  data() {
    return {
      localRecipeIngredients: this.recipe.ingredients.map((x) => x),
      updatedRecipe: {},
    };
  },
  // mounted() {
  //   console.log("edit", this.recipe);
  // },
  emits: {
    "exit-edit-click": function () {
      return true;
    },
    "save-edits": function (id) {
      //validation here.
      if (id) {
        return true;
      } else {
        console.warn("Save click emit | id is missing.");
        return false;
      }
    },
  },
  methods: {
    addIngredientField() {
      if (this.localRecipeIngredients.length < 9) {
        const newField = { qty: "", unit: "", ingredient: "" };
        this.localRecipeIngredients.push(newField);
      } else {
        // TODO: remove alert, replace w dynamic html notice
        alert("We're sorry, you cannot add more ingredients at this time.");
      }
    },
    deleteIngredientField(i) {
      if (this.localRecipeIngredients.length > 2) {
        this.localRecipeIngredients.splice(i);
      } else {
        // TODO: remove alert, replace w dynamic html notice
        alert(
          "We're sorry, you cannot have less than two ingredients in your drink."
        );
      }
    },
    exitEditModeClick() {
      this.$emit("exit-edit-click");
    },
    saveEditsClick(id, data) {
      this.$emit("save-edits", id, data);
    },
  },
};
</script>

<style></style>
