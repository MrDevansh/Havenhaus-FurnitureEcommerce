import { createSlice } from "@reduxjs/toolkit";

const persistedOrders = JSON.parse(localStorage.getItem("orders")) || [];

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: persistedOrders, // all orders { userEmail, items, date }
  },
  reducers: {
    addOrder: (state, action) => {
      // action.payload = { userEmail, items, createdAt }
      state.orders.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    }
  }
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
