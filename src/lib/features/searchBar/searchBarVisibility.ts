// import { IMedicine } from '@/interfaces/IMedicine';
import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const SearchBarVisibilitySlice = createSlice({
  name: 'collapsibleSearhbar',
  initialState,
  reducers: {
    changeSearchBarVisibilityState(state: boolean) {
      // console.log(action.payload);
      return !state;
    },
  },
});

export const { changeSearchBarVisibilityState } =
  SearchBarVisibilitySlice.actions;
export default SearchBarVisibilitySlice.reducer;
