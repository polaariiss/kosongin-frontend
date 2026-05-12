import axios from "axios";

const api = axios.create({
  baseURL:
    "https://kosongin-backend-production.up.railway.app",
});

export default api;