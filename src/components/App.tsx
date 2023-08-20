import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Home } from '../Pages/Home';
import { ExchangeRates } from '../Pages/ExchangeRates';

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
