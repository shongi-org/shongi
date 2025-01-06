// import { IMedicine } from '@/interfaces/IMedicine';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArea } from '@/interfaces/IArea';

const initialState: IArea = {
  _id: '',
  detail: '',
  geocode: {
    lat: 0,
    long: 0,
  },
  area: '',
};

const area = createSlice({
  name: 'area',
  initialState,
  reducers: {
    setArea(state: IArea, action: PayloadAction<IArea>) {
      // console.log(action.payload);
      return action.payload;
    },
  },
});

export const { setArea } = area.actions;
export default area.reducer;
