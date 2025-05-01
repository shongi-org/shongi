import { IAppointment } from '@/interfaces/IAppointment';
// import { IMedicine } from '@/interfaces/IMedicine';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// type ICart = {
//   items: {
//     [key: string]: (IMedicine | IAppointment) & {
//       quantity: number;
//       type: 'appointment' | 'medicine';
//     };
//   };
// };

const initialState: IAppointment = {};

const addToCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state: IAppointment, action: PayloadAction<IAppointment>) {
      state = { ...state, ...action.payload };
      return state;
      // if (state.homeAddress) {
      //   state.items[action.payload.id].quantity =
      //     state.items[action?.payload?.id].quantity + action.payload.quantity;
      // } else {
      //   state.items[action.payload.id] = { ...action.payload, quantity: 1 };
      // }
    },
    clearCart(state: IAppointment) {
      state = {};
      return state;
    },
  },
});

export const { addToCart, clearCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
