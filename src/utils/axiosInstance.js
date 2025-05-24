
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://akshaya-backend-service.onrender.com", // Corrected: removed "/api"
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
