import axios from  'axios';
const API_URL = 'http://localhost:5000/api';

const api = axios.create( {
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getProfile: () => api.get('/auth/profile'),
};

export const sparePartsAPI = {
  getAll: () => api.get('/spareParts'),
  create: (data) => api.post('/spareParts', data),
};

export const stockInAPI = {
  getAll: () => api.get('/stockIn'),
  create: (data) => api.post('/stockIn', data),
};


export const stockOutAPI = {
  getAll: () => api.get('/stockOut'),
  create: (data) => api.post('/stockOut', data),
  update: (id, data) => api.put(`/stockOut/${id}`, data),
  delete: (id) => api.delete(`/stockOut/${id}`),
  getReportByDate: (date) => api.get(`/stockOut/report/${date}`),
};

export const reportAPI = {
  getStockStatus: () => api.get('/reports/stock-status'),
};

export default api;