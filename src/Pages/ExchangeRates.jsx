import { useEffect, useState } from 'react';
import { getLatest } from 'services/currencyExhange';

export const ExchangeRates = () => {
  const [rates, setRates] = useState(null);
  useEffect(() => {
    getLatest('UAH').then(data => setRates(data));
  }, []);
  if (!rates) {
    return;
  }
  return (
    <>
      <h1>Rates</h1>
      <p>{rates.date}</p>
      <ul>
        {Object.entries(rates.rates).map(([key, value]) => {
          return (
            <li key={key}>
              {key}-{(1 / value).toFixed(2)}
            </li>
          );
        })}
      </ul>
    </>
  );
};
