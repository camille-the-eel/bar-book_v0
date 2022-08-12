//INITIALIZING AXIOS
import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
