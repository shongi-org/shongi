import { configureStore } from '@reduxjs/toolkit';

import addToCart from './features/cart/addToCart';

export const store = configureStore({
  reducer: {
    addToCart: addToCart,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
