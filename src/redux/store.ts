import { configureStore } from '@reduxjs/toolkit';

import pizzas from './pizza/slice';
import filter from './filter/slice';
import cart from './cart/slice';

const store = configureStore({
  reducer: {
    pizzas,
    filter,
    cart,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
