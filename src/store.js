import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';
import ordersReducer from './features/orders/ordersSlice';

export const store = configureStore({
  reducer: {
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
},
});
