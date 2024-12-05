import { configureStore } from '@reduxjs/toolkit';

import addToCart from './features/cart/addToCart';
import changeSearchBarVisibilityState from './features/searchBar/searchBarVisibility';
import setIsLoggedIn from './features/auth/isLoggedIn';

export const store = configureStore({
  reducer: {
    addToCart: addToCart,
    searchBarVisibility: changeSearchBarVisibilityState,
    setIsLoggedIn: setIsLoggedIn,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
