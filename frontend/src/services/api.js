import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getUsers = () => axios.get(`${API_URL}/users/`);
export const getProducts = () => axios.get(`${API_URL}/products/`);
export const getOrders = () => axios.get(`${API_URL}/orders/`);
