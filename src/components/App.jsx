import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar';
import { ExchangeRates } from 'Pages/ExchangeRates';
import { Home } from 'Pages/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<ExchangeRates />} />
      </Route>
    </Routes>
  );
};
