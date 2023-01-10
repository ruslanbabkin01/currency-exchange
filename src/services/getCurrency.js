export const getCurrency = (lat, lon) => {
  const API_KEY = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const URL = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${API_KEY}`;

  return fetch(URL).then(data => data.json());
};
