import { useState, useEffect } from 'react';
import { getCurrency } from 'services/getCurrency';
import { MainForm } from 'components/MainForm';
import { exchangeCurrency } from 'services/currencyExhange';
import { ExchangeResult } from 'components/ExchangeResult';

export const Home = () => {
  const [currency, setCurrency] = useState('USD');
  const [value, setValue] = useState('');
  const [exchangeResult, setExchangeResult] = useState(null);

  useEffect(() => {
    function success(pos) {
      const crd = pos.coords;

      getCurrency(crd.latitude, crd.longitude)
        .then(data =>
          setCurrency(data.results[0].annotations.currency.iso_code)
        )
        .catch(error => console.log(error));
    }

    function error(err) {
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

  const mainFormSubmit = inputValue => {
    setValue(inputValue);
  };
  return (
    <>
      <h1>Your current currency: {currency}</h1>
      <MainForm setValue={mainFormSubmit} />
      {exchangeResult && (
        <ExchangeResult requestedExchange={value} result={exchangeResult} />
      )}
    </>
  );
};
