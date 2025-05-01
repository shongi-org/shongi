import { configureStore } from '@reduxjs/toolkit';

import addToCart from './features/cart/addToCart';
import changeSearchBarVisibilityState from './features/searchBar/searchBarVisibility';
import setIsLoggedIn from './features/auth/isLoggedIn';
import changeAreaDropDownOpenState from './features/areaDropDownOpen/searchBarVisibility';
import setArea from './features/area/area';
import setSearchResults from './features/searchResults/searchResults';
import setMedicineSearchResults from './features/searchResults/medicineSearchResults';
import appointment from './features/appointment/appointmentDetails';

export const store = configureStore({
  reducer: {
    addToCart: addToCart,
    searchBarVisibility: changeSearchBarVisibilityState,
    setIsLoggedIn: setIsLoggedIn,
    changeAreaDropDownOpenState: changeAreaDropDownOpenState,
    area: setArea,
    searchResults: setSearchResults,
    medicineSearchResults: setMedicineSearchResults,
    appointment: appointment,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
