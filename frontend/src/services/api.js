import axios from "axios";

const API = axios.create({
  baseURL: "/api", // we can change later
});

export default API;
