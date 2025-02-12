import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;

const isLoggedInSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    setIsLoggedIn(state: boolean, action: PayloadAction<boolean>) {
      return action.payload;
    },
  },
});

export const { setIsLoggedIn } = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
