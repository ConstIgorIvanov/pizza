import React from 'react';

import CartBottom from './CartBottom';
import CartList from './CartList';
import CartTop from './CartTop';
import CartEmpty from './CartEmpty';
import { useSelector } from 'react-redux';

const Cart = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <div className="cart">
      <CartTop />
      <CartList />
      <CartBottom />
    </div>
  );
};

export default Cart;
