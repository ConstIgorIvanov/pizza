import { configureStore } from '@reduxjs/toolkit';

import pizzas from './pizza/slice';
import filter from './filter/slice';
import cart from './cart/slice';

export const store = configureStore({
  reducer: {
    pizzas,
    filter,
    cart,
  },
});
