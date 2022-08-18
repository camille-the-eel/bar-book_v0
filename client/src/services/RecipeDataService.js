// CREATING DATA SERVICE
// Using axios to send http requests

import http from "../http-common";

class RecipeDataService {
  getAll() {
    return http.get("/api/recipes");
  }
  get(id) {
    return http.get(`/api/recipes/${id}`);
  }
  create(data) {
    return http.post("/api/recipes", data);
  }
  update(id, data) {
    return http.put(`/api/recipes/${id}`, data);
  }
  delete(id) {
    return http.delete(`/api/recipes/${id}`);
  }
  deleteAll() {
    return http.delete(`/api/recipes`);
  }
  findByDrinkName(drinkName) {
    return http.get(`/api/recipes?drinkName=${drinkName}`);
  }
}

export default new RecipeDataService();
