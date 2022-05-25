import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import { ContexProvider } from './hoc/ContexProvider';

import './scss/app.scss';

function App() {
  return (
    <ContexProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </ContexProvider>
  );
}

export default App;
