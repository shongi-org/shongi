import { IAppointment } from '@/interfaces/IAppointment';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IAppointment = {
  patient_details: {
    name: '',
    gender: '',
    dob: new Date(),
  },
  selectedDate: new Date(),
  startTime: '',
  homeAddress: '',
  servicePointAddress: '',
  service_id: '',
  contactInfo: '',
  transport: '',
  agentGenderPreference: '',
};

const appointmentDetailsSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setAppointment(state: IAppointment, action: PayloadAction<IAppointment>) {
      state = { ...state, ...action.payload };
      return state;
    },
    clearAppointment(state: IAppointment) {
      state = {
        patient_details: {},
        selectedDate: new Date(),
        startTime: '',
        service_id: '',
        homeAddress: '',
        servicePointAddress: '',
        contactInfo: '',
        transport: '',
        agentGenderPreference: '',
      };
      return state;
    },
  },
});

export const { setAppointment, clearAppointment } =
  appointmentDetailsSlice.actions;
export default appointmentDetailsSlice.reducer;
