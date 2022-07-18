import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    alias: "/recipes",
    name: "Recipes",
    component: () => import("../components/RecipesList.vue"),
  },
  {
    path: "/recipes/:id",
    name: "recipe-details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Recipe.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddRecipe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
