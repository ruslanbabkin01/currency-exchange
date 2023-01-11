import axios from 'axios';

const API_KEY = 'd4683b09d0c94ec0aebf0b2e043decbf';
axios.defaults.baseURL = 'https://api.opencagedata.com/geocode/v1';

export async function getCurrency(lat: string, lon: string) {
  const data = await axios.get(`/json?q=${lat}+${lon}&key=${API_KEY}`);

  return data;
}
