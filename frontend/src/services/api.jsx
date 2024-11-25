import axios from 'axios';

// Crear una instancia base de Axios
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// Interceptor para incluir el token JWT en cada solicitud
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
