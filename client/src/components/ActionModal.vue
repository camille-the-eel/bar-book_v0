<template>
  <div class="modal-screen-overlay">
    <div class="modal-container">
      <div class="first-check" v-if="!this.showSecondConfirmation">
        <h3>{{ this.header }}</h3>
        <p>{{ this.disclaimerMessage }}</p>
        <p>{{ this.mainMessage }}</p>
        <button
          @click="
            {
              this.useSecondConfirmation === true
                ? openFinalCheck()
                : confirmAction(recipe.id);
            }
          "
        >
          {{ this.actionButton }}
        </button>
        <button @click="closeModal()">{{ this.cancelButton }}</button>
      </div>
      <div class="final-check" v-if="this.showSecondConfirmation">
        <h3>{{ this.header }}</h3>
        <p>{{ this.finalMessage }}</p>
        <button @click="secondConfirmAction(recipe.id)">
          {{ this.confirmActionButton }}
        </button>
        <button @click="closeModal()">{{ this.cancelButton }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActionModal",
  components: {},
  props: {
    recipe: Object,
    action: String,
  },
  emits: {
    "action-click": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Confirm modal click emit | id is missing.");
        return false;
      }
    },
    "close-modal": function () {
      return true;
    },
  },
  data() {
    return {
      showSecondConfirmation: false,
      useSecondConfirmation: false,
      header: "",
      disclaimerMessage: "",
      mainMessage: "",
      finalMessage: "",
      actionButton: "",
      confirmActionButton: "",
      cancelButton: "",
    };
  },
  mounted() {
    if (this.action === "DELETE") {
      this.header = "DELETE THIS RECIPE?";
      this.disclaimerMessage =
        "This is a permanent action and cannot be undone!";
      this.mainMessage =
        "Are you sure you want to delete this recipe from your Little Bar Book?";
      this.finalMessage =
        "Re-confirm that you want to delete this recipe. This cannot be undone.";
      this.actionButton = "Yes, permanently delete.";
      this.confirmActionButton = "Yes. Delete it forever.";
      this.cancelButton = "No, nevermind.";
      this.useSecondConfirmation = true;
    }
    if (this.action === "EXIT_EDIT") {
      this.header = "EXIT EDITING MODE?";
      this.disclaimerMessage = "Your changes will not be saved!";
      this.actionButton = "Exit, discard changes.";
      this.cancelButton = "Oops, take me back to editing mode.";
      this.useSecondConfirmation = false;
    }
  },
  methods: {
    openFinalCheck() {
      this.showSecondConfirmation = true;
    },
    confirmAction(id) {
      this.$emit("action-click", id);
      this.$emit("close-modal");
    },
    secondConfirmAction(id) {
      this.$emit("action-click", id);
      this.$emit("close-modal");
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
.modal-screen-overlay {
  /* z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  background-size: cover; */
  position: fixed;
  z-index: 10;
  background-color: darkblue;
}

.modal-container {
  min-width: 200px;
  max-width: 400px;
  color: white;
}
</style>
