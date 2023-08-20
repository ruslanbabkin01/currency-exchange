import axios from 'axios';

const KEY: any = process.env.REACT_APP_API_KEY_PLAYER;

const myHeaders = new Headers();
myHeaders.append('apikey', KEY);

// const currencyExchangeApi = axios.create({
//   baseURL: 'https://api.apilayer.com/exchangerates_data',
// });

const baseURL = 'https://api.apilayer.com/exchangerates_data';

const requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export async function exchangeCurrency(to: any, from: any, amount: any) {
  try {
    const data = await fetch(
      `${baseURL}/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    );

    return data.json();
  } catch (error) {
    console.log(error);
  }
}
export async function getLatest(base: string) {
  return fetch(
    `${baseURL}/latest?symbols=USD,GBP,EUR&base=${base}`,
    requestOptions
  ).then(response => response.json());
}
