import axios from 'axios';

const KEY: any = process.env.REACT_APP_API_KEY_EXCHANGE;

const currencyExchangeApi = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data',
});

const requestOptions = {
  headers: { apikey: KEY },
  redirect: 'follow',
};

export async function exchangeCurrency(
  to: string,
  from: string,
  amount: string
) {
  try {
    const { data } = await currencyExchangeApi.get(
      `/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getLatest(base: string) {
  try {
    const { data } = await currencyExchangeApi.get(
      `$/latest?symbols=USD,GBP,EUR&base=${base}`,
      requestOptions
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}
