import axios from 'axios';

export const fetchData = async (filters) => {
  try {
    const response = await axios.get('http://localhost:5000/api/data', {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
