import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: true,
};

export const getPizzas = createAsyncThunk(
  'pizzas/getPizzas',
  async (obj, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      `https://628b8636667aea3a3e311bce.mockapi.io/items?page=${obj.currentPage}&limit=4&category=${obj.category}&sortBy=${obj.sortBy}&order=${obj.order}`,
    );
    dispatch(setPizzas(res.data));
  },
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [getPizzas.pending]: (state) => {
      state.status = true;
    },
    [getPizzas.fulfilled]: (state) => {
      state.status = false;
    },
  },
});

export const { setPizzas } = pizzasSlice.actions;
export default pizzasSlice.reducer;
