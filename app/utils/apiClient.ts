import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    _limit: 5,
  },
});

export default apiClient;
