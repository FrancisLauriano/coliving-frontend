// services/apiService.jsx
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000', // Base URL do backend
  // withCredentials: true, 
});

api.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'; // Garante o cabeçalho correto
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;


