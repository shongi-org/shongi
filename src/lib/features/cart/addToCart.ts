import { IAppointment } from '@/interfaces/IAppointment';
import { IMedicine } from '@/interfaces/IMedicine';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type ICart = {
  items: {
    [key: string]: (IMedicine | IAppointment) & {
      quantity: number;
      type: 'appointment' | 'medicine';
    };
  };
};

const initialState: ICart = {
  items: {},
};

const addToCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(
      state: ICart,
      action: PayloadAction<
        (IMedicine | IAppointment) & {
          quantity: number;
          type: 'appointment' | 'medicine';
        }
      >,
    ) {
      // console.log(action.payload);
      if (state.items && state.items[action.payload.id]?.quantity) {
        state.items[action.payload.id].quantity =
          state.items[action?.payload?.id].quantity + action.payload.quantity;
      } else {
        state.items[action.payload.id] = { ...action.payload, quantity: 1 };
      }
    },
  },
});

export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
