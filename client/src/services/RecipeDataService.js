// CREATING DATA SERVICE
// Using axios to send http requests

import http from "../http-common";

class RecipeDataService {
  getAll() {
    return http.get("/recipes");
  }
  get(id) {
    return http.get(`/recipes/${id}`);
  }
  create(data) {
    return http.post("/recipes", data);
  }
  update(id, data) {
    return http.put(`/recipes/${id}`, data);
  }
  delete(id) {
    return http.delete(`/recipes/${id}`);
  }
  deleteAll() {
    return http.delete(`/recipes`);
  }
  findByDrinkName(drinkName) {
    return http.get(`/tutorials?drinkName=${drinkName}`);
  }
}

export default new RecipeDataService();
