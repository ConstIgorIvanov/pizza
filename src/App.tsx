import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Main/HomePage';
import CartPage from './pages/CartPage/CartPage';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

import { ContexProvider } from './hoc/ContexProvider';

import './scss/app.scss';

const App: React.FC = () => {
  return (
    <ContexProvider>
      <Routes>
        <Route path="/pizza" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </ContexProvider>
  );
};

export default App;
