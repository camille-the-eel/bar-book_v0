<template>
  <div class="page-container">
    <ActionModal
      v-if="this.modalShow"
      :recipe="this.recipe"
      :action="this.modalAction"
      @action-click="this.modalActionClick"
      @close-modal="closeModal"
    ></ActionModal>
    <div class="recipe-container">
      <h3>I am the recipe container.</h3>
      <RecipeDetails
        :recipe="this.recipe"
        v-if="this.recipe.id && !this.editingMode"
        @delete-recipe-click="deleteRecipeRequest"
        @enter-edit-mode="enterEditMode"
      ></RecipeDetails>
      <RecipeEditForm
        v-if="this.recipe.id && this.editingMode"
        :recipe="this.recipe"
        @exit-edit-click="exitEditRequest"
        @save-edits="saveEditUpdates"
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
      recipe: {},
      editingMode: false,
      modalShow: false,
      modalAction: "",
      modalActionClick: "",
      notFoundMessage: "",
    };
  },
  mounted() {
    RecipeDataService.get(this.$route.params.id).then((res) => {
      this.recipe = res.data;
    });
    console.log("Mounted", this.recipe);
  },
  methods: {
    closeModal() {
      this.modalShow = false;
    },
    // DELETING -----------------------
    deleteRecipeRequest() {
      this.modalShow = true;
      this.modalAction = "DELETE";
      this.modalActionClick = this.confirmedDeleteRecipe;
    },
    confirmedDeleteRecipe(id) {
      RecipeDataService.delete(id)
        .then(() => {
          this.recipe = [];
          this.notFoundMessage = "Recipe was successfully deleted.";
        })
        .catch((err) => {
          console.warn(`Error when deleting recipe with id: ${id}. ${err}`);
        });
    },
    // EDIT MODE -----------------------
    enterEditMode() {
      this.editingMode = true;
    },
    exitEditRequest() {
      this.modalShow = true;
      this.modalAction = "EXIT_EDIT";
      this.modalActionClick = this.exitEditMode;
    },
    exitEditMode() {
      this.editingMode = false;
    },
    // UPDATING -----------------------
    saveEditUpdates(id, data) {
      console.log("Save clicked");
      RecipeDataService.update(id, data)
        // TODO:
        .then((res) => {
          this.exitEditMode();
          return res;
          // console.log("RES", res);
          // console.log("DATA", id, data);
        })
        .catch((err) => {
          console.warn(`Error when updating recipe with id: ${id}. ${err}`);
        });
    },
  },
};
</script>
