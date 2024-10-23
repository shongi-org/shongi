import { IMedicine } from '@/interfaces/IMedicine';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type ICart = {
  items: {
    [key: number]: IMedicine & {
      quantity: number;
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
      action: PayloadAction<IMedicine & { quantity: number }>,
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
