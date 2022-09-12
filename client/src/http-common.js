//INITIALIZING AXIOS
import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: process.env.VUE_APP_BASE_URL,
  // baseURL: "https://bar-book-v0.herokuapp.com",
  // process.env.NODE_ENV === "production"
  //   ? "https://bar-book-v0.herokuapp.com"
  //   : "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
});
