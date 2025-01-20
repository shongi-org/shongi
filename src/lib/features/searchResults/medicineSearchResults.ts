import { IMedicine } from '@/interfaces/IMedicine';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IMedicine[] = [];

const searchMedicineResultsSlice = createSlice({
  name: 'medicineSearchResults',
  initialState,
  reducers: {
    setMedicineSearchResults(
      state: IMedicine[],
      action: PayloadAction<IMedicine[]>,
    ) {
      return action.payload;
    },
  },
});

export const { setMedicineSearchResults } = searchMedicineResultsSlice.actions;
export default searchMedicineResultsSlice.reducer;
