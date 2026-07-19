import axios from 'axios';

const api = axios.create({
  baseURL: '/api'
});

export const submitEnquiry = (data) => api.post('/contact', data);
export const getCakesByCategory = (category) => api.get(`/cakes/${category}`);
export const getAllCakes = () => api.get('/cakes');

export default api;
