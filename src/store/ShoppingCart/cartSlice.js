import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../MockData/Products";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      { ...products[0], quantity: 1 },
      { ...products[1], quantity: 2 },
      { ...products[2], quantity: 3 },
    ],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      //   console.log(existingItem);

      // should check later if qty <= product stock (take min and display a msg)
      if (existingItem) {
        existingItem.quantity += Number(quantity);
      } else {
        state.items.push({ ...product, quantity: Number(quantity) });
      }
    },
    updateCart: (state, action) => {
      // action.payload: array of { id, quantity }
      action.payload.forEach(({ id, quantity }) => {
        const item = state.items.find((item) => String(item.id) === String(id));
        if (item && quantity > 0) {
          item.quantity = Number(quantity);
        }
      });
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  updateCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
