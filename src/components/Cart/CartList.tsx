import { useAppSelector } from '../../hooks';
import { selectCart } from '../../redux/cart/selectors';

import { CartItem } from './CartItem';

const CartList: React.FC = () => {
  const { items } = useAppSelector(selectCart);

  return (
    <div className="content__items">
      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default CartList;
