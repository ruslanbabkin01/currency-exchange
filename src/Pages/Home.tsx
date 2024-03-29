import { useState, useEffect } from 'react';
import { getCurrency } from '../services/getCurrency';
import { exchangeCurrency } from '../services/currencyExchange';
import { MainForm } from '../components/MainForm';
import { ExchangeResult } from '../components/ExchangeResult';
import { AxiosResponse } from 'axios';

export const Home = () => {
  const [currency, setCurrency] = useState('USD');
  const [value, setValue] = useState('');
  const [exchangeResult, setExchangeResult] = useState<any>(null);

  useEffect(() => {
    function success(pos: any) {
      const crd = pos.coords;

      getCurrency(crd.latitude, crd.longitude)
        .then((res: AxiosResponse<any>) =>
          setCurrency(res.data.results[0].annotations.currency.iso_code)
        )
        .catch(error => console.log(error));
    }

    function error(err: any) {
      setCurrency('USD');
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    if (!value) {
      return;
    }

    const splitValue = value.split(' ');
    const convertFrom = splitValue[1];
    const convertTo = splitValue[3];
    const amountToConvert = splitValue[0];

    exchange();

    async function exchange() {
      try {
        const data = await exchangeCurrency(
          convertTo,
          convertFrom,
          amountToConvert
        );

        setExchangeResult(data.result);
      } catch (error) {
        console.log(error);
      }
    }
  }, [value]);

  const mainFormSubmit = (inputValue: any) => {
    setValue(inputValue);
  };

  return (
    <div className="sticky top-0 left-0 z-50  min-h-min px-6 py-3  shadow-xl">
      <h1 className="font-semibold text-center my-2">
        Your current currency: {currency}
      </h1>
      <MainForm setValue={mainFormSubmit} />
      {exchangeResult && (
        <ExchangeResult requestedExchange={value} result={exchangeResult} />
      )}
    </div>
  );
};
