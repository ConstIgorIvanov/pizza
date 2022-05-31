import { useAppSelector } from '../../hooks';

import CartBottom from './CartBottom';
import CartList from './CartList';
import CartTop from './CartTop';
import CartEmpty from './CartEmpty';

const Cart = () => {
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
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
