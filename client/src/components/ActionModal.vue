<template>
  <div class="modal-screen-overlay">
    <div class="modal-container">
      <button @click="closeModal()" class="cancel-btn exit-btn icon-btn">
        <XIcon />
      </button>
      <div class="first-check" v-if="!this.showSecondConfirmation">
        <h3>{{ this.header }}</h3>
        <p class="disclaimer-msg">{{ this.disclaimerMessage }}</p>
        <p>{{ this.mainMessage }}</p>
        <button
          @click="
            {
              this.useSecondConfirmation === true
                ? openFinalCheck()
                : confirmAction(recipe.id);
            }
          "
          class="final-action-btn text-btn"
        >
          {{ this.actionButton }}
        </button>
        <button @click="closeModal()" class="cancel-btn text-btn">
          {{ this.cancelButton }}
        </button>
      </div>
      <div class="final-check" v-if="this.showSecondConfirmation">
        <h3>{{ this.header }}</h3>
        <p>{{ this.finalMessage }}</p>
        <button
          @click="secondConfirmAction(recipe.id)"
          class="final-action-btn text-btn"
        >
          {{ this.confirmActionButton }}
        </button>
        <button @click="closeModal()" class="cancel-btn text-btn">
          {{ this.cancelButton }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import XIcon from "@/components/icons/XIcon.vue";

export default {
  name: "ActionModal",
  components: { XIcon },
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
      this.header = "Delete this recipe?";
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
      this.header = "Exit editing mode?";
      this.disclaimerMessage = "Your changes will not be saved!";
      this.actionButton = "Yes, discard changes.";
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
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  background-size: cover;
  position: fixed;
}

.modal-container {
  position: relative;
  max-width: 440px;
  margin: 10vh auto;
  background-color: white;
  color: var(--color-text);
  border: 0.1rem solid var(--color-accent-orange);
  padding: 3.7rem;
}

.text-btn {
  margin: 1rem;
}

.exit-btn {
  top: 0;
  padding: 0.6rem;
}

p {
  margin: 1rem 0;
  padding: 0 2rem;
}

.disclaimer-msg {
  color: var(--color-accent-orange);
  font-weight: 700;
  font-style: italic;
}
</style>
