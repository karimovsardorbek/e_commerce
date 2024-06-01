import axios from 'axios';

const baseURL = 'http://localhost:8000/api';

export const getProducts = async () => {
  const response = await axios.get(`${baseURL}/products/`);
  return response.data;
};

export const getOrders = async () => {
  const response = await axios.get(`${baseURL}/orders/`);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`${baseURL}/users/`);
  return response.data;
};
