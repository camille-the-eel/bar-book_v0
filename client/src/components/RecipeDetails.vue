<template>
  <div class="recipe-details-container">
    <div class="recipe-wrapper">
      <table class="recipe-details">
        <tr class="tr-drink-name">
          <th colspan="2">
            <h5>{{ recipe.drinkName }}</h5>
            <div :class="recipe.draft ? 'draft' : 'hidden'">DRAFT</div>
            <EditIcon
              class="hero-icons edit-recipe-btn"
              @click="enterEditMode(recipe.id)"
            />
          </th>
        </tr>
        <tr v-if="recipe.description" class="tr-description">
          <td colspan="2">
            {{ recipe.description }}
          </td>
        </tr>
        <tr
          class="tr-ingredient-list"
          v-for="(ingredientItem, i) in recipe.ingredients"
          :key="i"
        >
          <th :class="i === 0 ? 'th-first-ingredient' : ''">
            {{ ingredientItem.qty }} {{ ingredientItem.unit }}
          </th>
          <td :class="i === 0 ? 'td-first-ingredient' : ''">
            {{ ingredientItem.ingredient }}
          </td>
        </tr>
        <tr class="tr-garnish tr-details tr-build-details">
          <th>garnish</th>
          <td colspan="2">
            {{ recipe.garnish || "-" }}
          </td>
        </tr>
        <tr class="tr-glass tr-details tr-build-details">
          <th>glass</th>
          <td colspan="2">
            {{ recipe.glass || "-" }}
          </td>
        </tr>
        <tr class="tr-instructions tr-details">
          <th>instructions</th>
          <td colspan="2">
            {{ recipe.instructions || "-" }}
          </td>
        </tr>
        <tr class="tr-yearCreated tr-details">
          <th>year created</th>
          <td colspan="2">
            {{ recipe.yearCreated || "-" }}
          </td>
        </tr>
        <tr class="tr-otherInfo tr-details">
          <th>other info</th>
          <td colspan="2">
            {{ recipe.otherInfo || "-" }}
          </td>
        </tr>
        <tr class="tr-creatorAttribution tr-details">
          <th>creator</th>
          <td colspan="2">
            {{ recipe.creatorAttribution || "-" }}
          </td>
        </tr>
        <!-- <tr>
          <td colspan="2">
            {{ recipe.published }}
          </td>
        </tr> -->
      </table>
      <button
        class="text-btn delete-recipe-btn"
        @click="deleteRecipeClick(recipe.id)"
      >
        Delete this recipe
      </button>
    </div>
  </div>
</template>

<script>
import EditIcon from "@/components/icons/EditIcon.vue";
// import RecipeDataService from "../services/RecipeDataService";

export default {
  name: "RecipeDetails",
  components: { EditIcon },
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

<style scoped>
.recipe-details-container {
  margin: 4rem auto;
  max-width: 50rem;
  text-align: left;
}

.recipe-details {
  margin: 0 auto;
}

th,
td {
  font-size: 1.8rem;
}

th {
  width: 35%;
}

.tr-drink-name h5 {
  font-size: 3.8rem;
}

.tr-description td {
  text-align: left;
  color: var(--color-accent-orange);
  font-weight: 700;
}

.tr-description td {
  padding: 1rem 0 1rem 1rem;
  border-bottom: 0.05rem solid var(--color-accent-chartreuse);
}

.th-first-ingredient,
.td-first-ingredient {
  padding-top: 1.2rem;
}

.tr-glass th,
.tr-glass td {
  padding-bottom: 2rem;
}

.tr-instructions th,
.tr-instructions td {
  padding-top: 2rem;
  border-top: 0.05rem solid var(--color-accent-chartreuse);
}
/* .tr-yearCreated th,
.tr-yearCreated td {
  padding-top: 2rem;
  border-top: 0.05rem solid var(--color-accent-chartreuse);
} */

.tr-build-details th {
  font-weight: 200;
}
.edit-recipe-btn {
  width: 3rem;
  position: absolute;
  right: 1rem;
  top: 1.8rem;
}

.draft {
  font-size: 1.6rem;
  top: 2rem;
}

.delete-recipe-btn {
  background-color: var(--color-accent-red);
  color: #fff;
  font-size: 1.4rem;
  margin: 4rem 0;
}
</style>
