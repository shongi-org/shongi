import { IMedicine } from '@/interfaces/IMedicine';
import { createSlice } from '@reduxjs/toolkit';
interface ICart {
  items: {
    [key: number]:
      | IMedicine
      | {
          quantity: number;
        };
  };
}

const initialState: ICart = {
  items: {},
};

const addToCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, PayloadAction) {
      console.log(PayloadAction);
      //   state.items[];
    },
  },
});

export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
