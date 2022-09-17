<template>
  <!-- option to view as fraction or decimal -->
  <!-- validate fractions -->
  <!-- validate everything in general sheesh. -->

  <!-- 
    what do i want this form to do?
    - ideally, repeat values are stored in a separate data model, as the user types, an api call goes out to search the database. option to add a new value to db, otherwise, store foreign key to send in form submit
    - add multiple garnishes, ui display like adding multiple tags to the field
    - add tags to custom groups (user-created)
    - add image
    - publish recipe
    - requirements for draft, personal, and public are different?

   -->
  <form class="add-recipe">
    <h2>Add your recipe</h2>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group inline-checkbox">
          <!-- TODO: if clicked, change drink name value to "Draft Datetime" -->
          <label for="draft" class="inline-label"
            >Tag this recipe as a draft?</label
          ><input
            type="checkbox"
            class="form-control"
            id="draft"
            v-model="recipe.draft"
            name="draft"
            @change="toggleDraftDrinkName()"
          />
        </div>
        <div class="form-group">
          <label for="drink-name">Drink Name</label
          ><input
            type="text"
            class="form-control"
            id="drink-name"
            v-model.trim="recipe.drinkName"
            name="drink-name"
            placeholder="Martini"
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
            placeholder="Simple, classic, boozy."
          />
        </div>

        <div class="build-specs">
          <h4>Build Specs</h4>
          <span>Recipes must have a minimum of two ingredients.</span>
          <!-- Ingredients -->
          <div
            class="form-group ingredient-item"
            v-for="(ingredientItem, index) in recipe.recipeIngredientItems"
            :key="index"
            name="ingredient-list"
          >
            <!-- TODO: make array for placeholder text? -->
            <div>
              <label :for="`qty${index + 1}`">Qty</label>
              <input
                type="text"
                class="form-control"
                size="3"
                :id="`qty${index + 1}`"
                v-model.trim="ingredientItem.measurement_qty"
                :name="`qty${index + 1}`"
                placeholder="2"
              />
            </div>
            <div>
              <label :for="`unit${index + 1}`">Unit</label>
              <input
                type="text"
                class="form-control"
                size="6"
                :id="`unit${index + 1}`"
                v-model.trim="ingredientItem.measurement_unit"
                :name="`unit${index + 1}`"
                placeholder="oz"
              />
            </div>
            <div>
              <label :for="`ingredient${index + 1}`">Ingredient</label>
              <input
                type="text"
                class="form-control"
                :id="`ingredient${index + 1}`"
                v-model.trim="ingredientItem.ingredient"
                :name="`ingredient${index + 1}`"
                required
                placeholder="gin or vodka"
              />
              <!-- <button
                class="form-list-btn"
                @click="removeIngredientItem(index)"
                :disabled="recipe.recipeIngredientItems.length <= 2"
              >
              X
              </button> -->
            </div>
            <button
              class="form-list-btn"
              @click="removeIngredientItem(index)"
              :disabled="recipe.recipeIngredientItems.length <= 2"
            >
              <XMarkIcon />
            </button>
          </div>
          <button
            v-if="recipe.recipeIngredientItems.length <= 15"
            @click="addIngredientItem()"
          >
            Add another ingredient
          </button>
        </div>

        <div class="form-group">
          <label for="garnish">Garnish</label>
          <input
            type="text"
            class="form-control"
            id="garnish"
            v-model.trim="recipe.garnish"
            name="garnish"
            placeholder="lemon twist"
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
            placeholder="martini glass"
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
            placeholder="Measure all ingredients into stirring glass, add ice, stir for 30 seconds. Double strain into glass. Garnish."
          ></textarea>
        </div>
        <div class="form-group">
          <label for="creator-attribution">Creator Attribution</label>
          <input
            type="text"
            class="form-control"
            id="creator-attribution"
            v-model.trim="recipe.creatorAttribution"
            name="creator-attribution"
            placeholder="Johnathan Doe"
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
            placeholder="1960s"
          />
        </div>
        <div class="form-group">
          <label for="other-info"
            >Other information or fun facts about this drink:</label
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
        <!-- <span class="disclaimer draft-disclaimer"
          >Draft recipes will be saved to your personal bar book, but cannot be
          published to the public page until updated as finalized.</span
        > -->
        <br />
        <button @click="saveRecipe" class="success-btn">Add Recipe</button>
        <br />
        <span class="disclaimer publish-disclaimer"
          >Does not publish recipe. Adds to personal book only.</span
        >
      </div>
      <div v-else>
        <h4>You have successfully added the recipe to your personal book!</h4>
        <button class="add-more-btn" @click="newRecipe">Add Another</button>
      </div>
    </div>
  </form>
</template>

<script>
// import DeleteIcon from "../components/DeleteButton.vue";
import RecipeDataService from "../services/RecipeDataService";
import XMarkIcon from "../components/icons/XMarkIcon.vue";

export default {
  name: "add-recipe",
  components: { XMarkIcon },
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
    toggleDraftDrinkName() {
      const draftName = `Draft – `;
      // also check if this.drinkName has a value already, we don't want to overwrite that
      this.recipe.draft
        ? (this.recipe.drinkName = draftName)
        : (this.recipe.drinkName = "");
    },
    removeIngredientItem(i) {
      if (this.recipe.recipeIngredientItems.length <= 2) {
        alert("Recipes must have a minimum of two ingredients.");
      } else {
        this.recipe.recipeIngredientItems.splice(i, 1);
      }
    },
    addIngredientItem() {
      this.recipe.recipeIngredientItems.push({
        measurement_qty: null,
        measurement_unit: "",
        ingredient: "",
      });
    },
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

<style scoped></style>
