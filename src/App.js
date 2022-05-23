import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import './scss/app.scss';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/125" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
