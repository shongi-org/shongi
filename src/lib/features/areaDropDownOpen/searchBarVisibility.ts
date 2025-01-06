// import { IMedicine } from '@/interfaces/IMedicine';
import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = true;

const areaDropDownOpenSlice = createSlice({
  name: 'areaDropdownOpen',
  initialState,
  reducers: {
    changeAreaDropDownOpenState(state: boolean) {
      // console.log(action.payload);
      return !state;
    },
  },
});

export const { changeAreaDropDownOpenState } = areaDropDownOpenSlice.actions;
export default areaDropDownOpenSlice.reducer;
