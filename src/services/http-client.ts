import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://64a64c2c096b3f0fcc7f8ab0.mockapi.io/ac/v1/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default httpClient;
