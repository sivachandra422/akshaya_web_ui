
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://akshaya-backend-service.onrender.com/api',
});

export default instance;
