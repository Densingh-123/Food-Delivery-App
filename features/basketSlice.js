import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const item = action.payload;
      // Prevent adding duplicates based on item ID
      const itemExists = state.items.some((existingItem) => existingItem.id === item.id);
      if (!itemExists) {
        state.items.push(item);
      }
    },
    removeFromBasket: (state, action) => {
      // Use filter to remove item based on ID
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selector to get basket items by ID
export const selectBasketItemsWithId = (state, id) => {
  return state.basket.items.filter((item) => item.id === id);
};

// Selector to get all basket items
export const selectBasketItems = (state) => state.basket.items;

// Selector to calculate the total cost of items in the basket
export const BasketTotal = (state) => {
  return state.basket.items.reduce((total, item) => total + item.price, 0);
};

export default basketSlice.reducer;
