import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov/';
const API_KEY = 'oUuRBgXHYSHjXflCwGcskZz4m2UbBtdkNLRl6uWa';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};