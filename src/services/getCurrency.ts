import axios from 'axios';

const getCurrencyApi = axios.create({
  baseURL: 'https://api.opencagedata.com/geocode/v1',
});

export async function getCurrency(lat: string, lon: string) {
  const data = await getCurrencyApi.get(
    `/json?q=${lat}+${lon}&key=${process.env.REACT_APP_API_KEY}`
  );

  return data;
}
