<template>
  <div class="page-container">
    <ActionModal
      v-if="this.deleteModalShow"
      :recipe="this.recipe"
      :action="'DELETE'"
      @confirm-click="confirmedDeleteRecipe"
      @close-modal="closeModal"
    ></ActionModal>
    <div class="recipe-container">
      <RecipeDetails
        :recipe="this.recipe"
        v-if="this.recipe.id && !this.editingMode"
        @delete-recipe-click="deleteRecipeRequest"
        @enter-edit-mode="enterEditMode"
      ></RecipeDetails>
      <RecipeEditForm
        v-if="this.recipe.id && this.editingMode"
      ></RecipeEditForm>
      <RecipeNotFound
        v-if="!this.recipe.id"
        :message="this.notFoundMessage"
      ></RecipeNotFound>
    </div>
  </div>
</template>

<script>
import RecipeDetails from "@/components/RecipeDetails.vue";
import RecipeEditForm from "@/components/RecipeEditForm.vue";
import RecipeNotFound from "@/components/RecipeNotFound.vue";
import ActionModal from "@/components/ActionModal.vue";
import RecipeDataService from "../services/RecipeDataService";

export default {
  name: "recipe",
  components: { RecipeDetails, RecipeEditForm, RecipeNotFound, ActionModal },
  data() {
    return {
      recipe: [],
      editingMode: false,
      deleteModalShow: false,
      notFoundMessage: "",
    };
  },
  mounted() {
    RecipeDataService.get(this.$route.params.id).then(
      (res) => (this.recipe = res.data)
    );
  },
  methods: {
    deleteRecipeRequest() {
      this.deleteModalShow = true;
    },
    confirmedDeleteRecipe(id) {
      RecipeDataService.delete(id)
        .then(() => {
          this.closeModal();
          this.recipe = [];
          this.notFoundMessage = "Recipe was successfully deleted.";
        })
        .catch((err) => {
          console.warn(`Error when deleting recipe with id: ${id}. ${err}`);
        });
    },
    enterEditMode(id) {
      this.editingMode = true;
      // enter mode
      // RecipeDataService.update(id, data);
      console.log("edit clicked on ", id);
    },
    closeModal() {
      this.deleteModalShow = false;
    },
  },
};
</script>
