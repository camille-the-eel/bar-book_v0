<template>
  <div class="recipe-details-container">
    <h3>DETAIL VIEW ONLY COMPONENT</h3>
    <div class="recipe">
      <EditButton class="edit-recipe-btn" @click="enterEditMode(recipe.id)" />
      <DeleteButton
        class="delete-recipe-btn"
        @click="deleteRecipeClick(recipe.id)"
      />
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
      <tr
        class="ingredient-list"
        v-for="(ingredientItem, i) in recipe.ingredients"
        :key="i"
      >
        <th>{{ ingredientItem.qty }} {{ ingredientItem.unit }}</th>
        <td>{{ ingredientItem.ingredient }}</td>
      </tr>
      <tr>
        <td colspan="2">
          {{ recipe.garnish }}
        </td>
      </tr>
      <tr>
        <td colspan="2">
          {{ recipe.glass }}
        </td>
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
      <tr>
        <td colspan="2">
          {{ recipe.otherInfo }}
        </td>
      </tr>
      <tr>
        <td colspan="2">
          {{ recipe.creatorAttribution }}
        </td>
      </tr>
      <tr>
        <td colspan="2">
          {{ recipe.published }}
        </td>
      </tr>
    </div>
  </div>
</template>

<script>
import DeleteButton from "@/components/DeleteButton.vue";
import EditButton from "@/components/EditButton.vue";
// import RecipeDataService from "../services/RecipeDataService";

export default {
  name: "RecipeDetails",
  components: { DeleteButton, EditButton },
  props: {
    recipe: Object,
  },
  emits: {
    "delete-recipe-click": function (id) {
      //validation here.
      if (id) {
        return true;
      } else {
        console.warn("Delete click emit | id is missing.");
        return false;
      }
    },
    "enter-edit-mode": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Enter edit mode click emit | id is missing.");
        return false;
      }
    },
  },
  mounted() {
    console.log(this.recipe);
  },
  methods: {
    deleteRecipeClick(id) {
      this.$emit("delete-recipe-click", id);
    },
    enterEditMode(id) {
      this.$emit("enter-edit-mode", id);
    },
  },
};
</script>

<style></style>
