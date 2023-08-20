import axios from 'axios';

const myHeaders = new Headers();
myHeaders.append('apikey', process.env.API_KEY_PLAYER!);

const currencyExchangeApi = axios.create({
  baseURL : 'https://api.apilayer.com/exchangerates_data'
})

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export async function exchangeCurrency(to: any, from: any, amount: any) {
  try {
    const data = await fetch(
      `${currencyExchangeApi}/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    );

    return data.json();
  } catch (error) {
    console.log(error);
  }
}
export function getLatest(base: string) {
  return fetch(
    `${currencyExchangeApi}/latest?symbols=USD,GBP,EUR&base=${base}`,
    requestOptions
  ).then(response => response.json());
}
