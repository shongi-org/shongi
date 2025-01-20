// import { ISearchResult } from '@/interfaces/ISearchResult';
import { ISubservice } from '@/interfaces/ISubservice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ISubservice[] = [];

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    setSearchResults(
      state: ISubservice[],
      action: PayloadAction<ISubservice[]>,
    ) {
      return action.payload;
    },
  },
});

export const { setSearchResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
