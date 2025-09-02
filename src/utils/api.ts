import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // your Express backend
});

// attach JWT token if available
api.interceptors.request.use((config) => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default api;
