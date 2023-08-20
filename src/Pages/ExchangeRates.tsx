import { useEffect, useState } from 'react';
import { getLatest } from '../services/currencyExchange';

export const ExchangeRates = () => {
  const [rates, setRates] = useState<any>(null);
  useEffect(() => {
    getLatest('UAH').then(data => setRates(data));
  }, []);

  if (!rates) {
    return <></>;
  }

  return (
    <div className="mx-auto text-center">
      <h1 className="font-semibold text-2xl">Rates on</h1>
      <p className=" mb-6">
        date: <span className="text-red-400">{rates.date}</span>
      </p>
      <ul>
        {Object.entries(rates.rates).map(([key, value]: any) => {
          return (
            <li key={key} className="my-2 py-1">
              {key}-{(1 / value).toFixed(2)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
