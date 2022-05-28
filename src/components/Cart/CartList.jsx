import React from 'react';
import { CartItem } from './CartItem';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cart/selectors';
const CartList = () => {
  const { items } = useSelector(selectCart);

  return (
    <div className="content__items">
      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default CartList;
