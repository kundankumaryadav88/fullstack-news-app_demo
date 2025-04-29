import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const searchNews = async (name) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: { name },
  });
  return response.data;
};
