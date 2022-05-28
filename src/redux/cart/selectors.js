export const selectCart = (state) => state.cart;
export const selectCartItemById = (id) => (state) => {
  return state.cart.items.find((item) => item.id === id);
};
