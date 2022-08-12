// import { createRouter, createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/recipes",
    name: "recipes",
    component: () => import("../components/RecipesList.vue"),
  },
  {
    path: "/recipes/:id",
    name: "recipe-details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route which is lazy-loaded when the route is visited.
    component: () => import("../views/RecipeView.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../views/AddRecipeView.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(),
  routes,
});

export default router;
