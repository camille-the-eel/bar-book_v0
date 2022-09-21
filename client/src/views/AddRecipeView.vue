<template>
  <!-- option to view as fraction or decimal -->
  <!-- validate fractions -->
  <!-- validate everything in general sheesh. -->

  <!-- set default unit: oz, ml, c -->

  <!-- 
    what do i want this form to do?
    - ideally, repeat values are stored in a separate data model, as the user types, an api call goes out to search the database. option to add a new value to db, otherwise, store foreign key to send in form submit
    - add multiple garnishes, ui display like adding multiple tags to the field
    - add tags to custom groups (user-created)
    - add image
    - publish recipe
    - requirements for draft, personal, and public are different?

   -->
  <div class="add-recipe form-wrapper">
    <h2 class="form-title">Add your recipe</h2>
    <div class="submit-form">
      <div v-if="!submitted">
        <!-- Basic Info -->
        <div class="form-category">
          <div class="form-group inline-checkbox">
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
            <label for="drink-name"
              >Drink Name<span class="form-required">*</span></label
            >
            <input
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
        </div>
        <!-- Ingredients -->
        <div class="build-specs form-category">
          <h4>Build Specs</h4>
          <span class="form-subheader"
            >Recipes must have a minimum of two ingredients.</span
          >
          <div class="ingredient-list-wrapper">
            <div
              class="form-group ingredient-item"
              v-for="(ingredientItem, index) in recipe.recipeIngredientItems"
              :key="ingredientItem.id"
              name="ingredient-list"
            >
              <div>
                <label :for="`qty${index + 1}`">Qty</label>
                <input
                  type="text"
                  class="form-control"
                  size="4"
                  :id="`qty${index + 1}`"
                  v-model.trim="ingredientItem.measurement_qty"
                  :name="`qty${index + 1}`"
                  :placeholder="
                    ingredientListPlaceholders.find(
                      (el) => el.id === ingredientItem.id
                    ).qty
                  "
                  aria-describedby="2"
                />
              </div>
              <div>
                <label :for="`unit${index + 1}`">Unit</label>
                <input
                  type="text"
                  class="form-control"
                  size="10"
                  :id="`unit${index + 1}`"
                  v-model.trim="ingredientItem.measurement_unit"
                  :name="`unit${index + 1}`"
                  :placeholder="
                    ingredientListPlaceholders.find(
                      (el) => el.id === ingredientItem.id
                    ).unit
                  "
                  aria-describedby="ounces"
                />
              </div>
              <div>
                <label :for="`ingredient${index + 1}`"
                  >Ingredient<span class="form-required">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  size="24"
                  :id="`ingredient${index + 1}`"
                  v-model.trim="ingredientItem.ingredient"
                  :name="`ingredient${index + 1}`"
                  required
                  :placeholder="
                    ingredientListPlaceholders.find(
                      (el) => el.id === ingredientItem.id
                    ).ingredient
                  "
                  arira-describedby="Rittenhouse rye whiskey"
                />
              </div>
              <button
                class="form-list-btn icon-btn"
                @click="removeIngredientItem(ingredientItem.id, index)"
                :disabled="recipe.recipeIngredientItems.length <= 2"
              >
                <XMarkIcon />
              </button>
            </div>
          </div>
          <button
            v-if="recipe.recipeIngredientItems.length <= 15"
            @click="addIngredientItem()"
            class="add-more-fields-btn text-btn"
          >
            Add another ingredient
          </button>
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
        </div>
        <!-- <span class="disclaimer draft-disclaimer"
          >Draft recipes will be saved to your personal bar book, but cannot be
          published to the public page until updated as finalized.</span
        > -->
        <button @click="saveRecipe" class="save-btn text-btn">
          Add Recipe
        </button>
        <br />
        <span class="disclaimer publish-disclaimer"
          >Does not publish recipe. Adds to personal book only.</span
        >
      </div>
      <div v-else>
        <h4>You have successfully added the recipe to your personal book!</h4>
        <button class="success-continue-btn text-btn" @click="newRecipe">
          Add Another
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import moment from "moment";
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
            id: nanoid(10),
            measurement_qty: null,
            measurement_unit: "",
            ingredient: "",
          },
          {
            id: nanoid(10),
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
      generatedDraftTitle: "",
      ingredientListPlaceholders: [
        {
          id: null,
          qty: "2",
          unit: "oz",
          ingredient: "Herradura Añejo tequila",
        },
        { id: null, qty: "1", unit: "barspoon", ingredient: "agave" },
        { id: null, qty: "1", unit: "dash", ingredient: "hellfire bitters" },
        { id: null, qty: "0.25", unit: "c", ingredient: "cubed cucumber" },
        { id: null, qty: "-", unit: "top with", ingredient: "club soda" },
        { id: null, qty: "1", unit: "splash", ingredient: "cranberry juice" },
        {
          id: null,
          qty: "0.5",
          unit: "oz",
          ingredient: "Pierre Ferrand dry curaçao",
        },
        { id: null, qty: "-", unit: "equal parts", ingredient: "vodka" },
        { id: null, qty: "50", unit: "ml", ingredient: "Rittenhouse rye" },
        {
          id: null,
          qty: "2",
          unit: "dashes",
          ingredient: "hopped grapefruit bitters",
        },
        {
          id: null,
          qty: "3",
          unit: "cubes",
          ingredient: "watermelon ice cubes",
        },
        { id: null, qty: "30", unit: "ml", ingredient: "beet shrub" },
        {
          id: null,
          qty: "4",
          unit: "wedges",
          ingredient: "fresh blood orange",
        },
        { id: null, qty: "2", unit: "leaves", ingredient: "fresh mint" },
        {
          id: null,
          qty: "0.75",
          unit: "oz",
          ingredient: "oloroso sherry",
        },
        { id: null, qty: "1", unit: "oz", ingredient: "fresh lime juice" },
      ],
    };
  },
  created() {
    this.initiatePlaceholderIds();
  },
  methods: {
    initiatePlaceholderIds() {
      this.ingredientListPlaceholders[0].id =
        this.recipe.recipeIngredientItems[0].id;
      this.ingredientListPlaceholders[1].id =
        this.recipe.recipeIngredientItems[1].id;
    },
    toggleDraftDrinkName() {
      const date = moment().format("dddd l");
      this.generatedDraftTitle = `DRAFT | ${date}`;

      if (this.recipe.draft && this.recipe.drinkName === "") {
        this.recipe.drinkName = this.generatedDraftTitle;
      } else {
        if (this.recipe.drinkName === this.generatedDraftTitle) {
          this.recipe.drinkName = "";
        }
      }
    },
    removeIngredientItem(ingredientId, i) {
      if (this.recipe.recipeIngredientItems.length <= 2) {
        alert("Recipes must have a minimum of two ingredients.");
      } else {
        this.recipe.recipeIngredientItems.splice(i, 1);
        this.ingredientListPlaceholders.find(
          (el) => el.id === ingredientId
        ).id = null;
      }
    },
    addIngredientItem() {
      const newId = nanoid(10);
      this.recipe.recipeIngredientItems.push({
        id: newId,
        measurement_qty: null,
        measurement_unit: "",
        ingredient: "",
      });
      this.ingredientListPlaceholders.find((el) => el.id === null).id = newId;
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
          console.log("DATA SENT", res.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log("AddRecipe error catch:", e.response);
        });
    },
    newRecipe() {
      this.ingredientListPlaceholders.forEach((el) => el.id === null);
      this.submitted = false;
      this.recipe = {
        id: null,
        drinkName: "",
        description: "",
        recipeIngredientItems: [
          {
            id: nanoid(),
            measurement_qty: null,
            measurement_unit: "",
            ingredient: "",
          },
          {
            id: nanoid(),
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
      this.initiatePlaceholderIds();
    },
  },
};
</script>

<style scoped></style>
