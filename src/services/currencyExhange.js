const API_KEY = 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj';

const myHeaders = new Headers();
myHeaders.append('apikey', API_KEY);

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export async function exchangeCurrency(to, from, amount) {
  try {
    const data = await fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    );

    return data.json();
  } catch (error) {
    console.log(error);
  }
}
export function getLatest(base) {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/latest?symbols=USD,GBP,EUR&base=${base}`,
    requestOptions
  ).then(response => response.json());
}
