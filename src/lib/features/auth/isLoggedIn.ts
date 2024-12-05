import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// type ICart = {
//   items: {
//     [key: number]: IMedicine & {
//       quantity: number;
//     };
//   };
// };

const initialState: boolean = false;

const isLoggedInSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    setIsLoggedIn(state: boolean, action: PayloadAction<boolean>) {
      console.log('state', action.payload);

      return action.payload;
      //   if (state.items && state.items[action.payload.id]?.quantity) {
      //     state.items[action.payload.id].quantity =
      //       state.items[action?.payload?.id].quantity + action.payload.quantity;
      //   } else {
      //     state.items[action.payload.id] = { ...action.payload, quantity: 1 };
      //   }
    },
  },
});

export const { setIsLoggedIn } = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
