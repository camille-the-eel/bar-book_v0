<template>
  <div class="recipe-details-container form-wrapper">
    <button class="exit-edit-btn icon-btn" @click="exitEditModeClick()">
      <XIcon />
    </button>
    <h3 class="form-title">Edit your recipe</h3>
    <!-- Basic Info -->
    <div class="form-category">
      <div class="form-group inline-checkbox">
        <label for="draft">Tag this recipe as a draft?</label
        ><input
          type="checkbox"
          class="form-control"
          id="draft"
          :checked="localDraftTag"
          name="draft"
          @change="updateDraftTag()"
        />
      </div>
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
      </div>
      <!-- Ingredients -->
      <div class="build-specs form-category">
        <h4>Build Specs</h4>
        <span>Recipes must have a minimum of two ingredients.</span>
        <div
          class="form-group ingredient-item"
          v-for="(ingredientItem, i) in this.localRecipeIngredients"
          :key="i"
          name="ingredient-list"
        >
          <div class="flex-group qty">
            <label :for="`qty${i}`">Qty</label>
            <input
              type="text"
              class="form-control"
              size="4"
              :id="`qty${i}`"
              name="qty"
              v-model="ingredientItem.qty"
            />
            <!-- :value="ingredientItem.qty"
            @input="
              (e) => (updatedRecipe[`ingredientItem${i}_Qty`] = e.target.value)
            " -->
          </div>
          <div class="flex-group unit">
            <label :for="`unit${i}`">Unit</label>
            <input
              type="text"
              class="form-control"
              size="10"
              :id="`unit${i}`"
              v-model="ingredientItem.unit"
              name="unit"
            />
          </div>
          <div class="flex-group ingredient">
            <label :for="`ingredient${i}`">Ingredient</label>
            <div class="flex-group-with-btn">
              <input
                type="text"
                class="form-control"
                size="24"
                :id="`ingredient${i}`"
                name="ingredient"
                required
                v-model="ingredientItem.ingredient"
              />
              <button
                class="form-list-btn icon-btn"
                @click="deleteIngredientField(i)"
                :disabled="localRecipeIngredients.length <= 2"
              >
                <XIcon />
              </button>
            </div>
          </div>
        </div>
        <button
          v-if="localRecipeIngredients.length <= 15"
          @click="addIngredientField()"
          class="add-more-fields-btn text-btn"
        >
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
      </div>
      <!-- Extra Info -->
      <div class="extra-info form-category">
        <h4>Extra Info</h4>
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
      </div>
      <button
        class="update-recipe-btn text-btn"
        @click="saveEditsClick(recipe.id)"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import XIcon from "./icons/XIcon.vue";
export default {
  name: "RecipeEditForm",
  components: { XIcon },
  props: {
    recipe: Object,
  },
  data() {
    return {
      localRecipeIngredients: this.recipe.ingredients.map((x) => x),
      localDraftTag: this.recipe.draft,
      updatedRecipe: {},
    };
  },
  // mounted() {
  //   console.log(this.recipe);
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
    // TODO: the way all of this is handled is not ideal, refactor into vuex
    updateDraftTag() {
      this.localDraftTag = !this.localDraftTag;
      this.updatedRecipe.draft = this.localDraftTag;
    },
    addIngredientField() {
      this.localRecipeIngredients.push({ qty: "", unit: "", ingredient: "" });
    },
    deleteIngredientField(i) {
      this.localRecipeIngredients.splice(i, 1);
    },
    exitEditModeClick() {
      this.$emit("exit-edit-click");
    },
    saveEditsClick(id) {
      for (let i = 0; i <= 15; i++) {
        if (this.localRecipeIngredients[i]) {
          this.updatedRecipe[`ingredientItem${i}_Qty`] =
            this.localRecipeIngredients[i].qty;
          this.updatedRecipe[`ingredientItem${i}_Unit`] =
            this.localRecipeIngredients[i].unit;
          this.updatedRecipe[`ingredientItem${i}_Ingredient`] =
            this.localRecipeIngredients[i].ingredient;
        } else {
          this.updatedRecipe[`ingredientItem${i}_Qty`] = "";
          this.updatedRecipe[`ingredientItem${i}_Unit`] = "";
          this.updatedRecipe[`ingredientItem${i}_Ingredient`] = "";
        }
      }
      console.log("UPDATED", this.updatedRecipe);
      const data = this.updatedRecipe;
      this.$emit("save-edits", id, data);
    },
  },
};
</script>

<style></style>
