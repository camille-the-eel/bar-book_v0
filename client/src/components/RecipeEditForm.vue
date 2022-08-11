<template>
  <div class="recipe-details-container">
    <button class="exit-edit-btn" @click="exitEditModeClick()">X</button>
    <div class="recipe">
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
      updatedRecipe: {
        drinkName: "Fresh Martini ",
        description: "A twist on the classic.",
      },
    };
  },
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
