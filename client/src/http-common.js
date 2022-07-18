//INITIALIZING AXIOS
import axios from "axios";

export default axios.create({
  //NOTE: update baseURL
  baseURL: "http://localhost:8080/api",
  // baseURL: "https://api.coindesk.com/v1/bpi/currentprice.json",
  // baseURL: process.env.BASE_URL,
  // baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
