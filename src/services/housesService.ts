import axios from 'axios';

export const fetchHouses = async () => {
  const response = await axios.get('https://wizard-world-api.herokuapp.com/Houses');
  return response.data;
};
