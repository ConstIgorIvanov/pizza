import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { SearchPizzaParams, PizzaState, Pizza } from './types';

const initialState: PizzaState = {
  items: [],
  status: true,
};

export const getPizzas = createAsyncThunk(
  'pizzas/getPizzas',
  async (obj: SearchPizzaParams, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      `https://628b8636667aea3a3e311bce.mockapi.io/items?page=${obj.currentPage}&limit=4&category=${obj.category}&sortBy=${obj.sortBy}&order=${obj.order}&search=${obj.searchValue}`,
    );
    dispatch(setPizzas(res.data));
  },
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<Pizza[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPizzas.pending, (state, action) => {
      state.status = true;
    });
    builder.addCase(getPizzas.fulfilled, (state, action) => {
      state.status = false;
    });
  },
});

export const { setPizzas } = pizzasSlice.actions;
export default pizzasSlice.reducer;
