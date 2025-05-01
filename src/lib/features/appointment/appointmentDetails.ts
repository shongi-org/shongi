import { IAppointmentDetails } from '@/interfaces/IAppointment';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IAppointmentDetails = {
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
    setAppointment(
      state: IAppointmentDetails,
      action: PayloadAction<IAppointmentDetails>,
    ) {
      state = { ...state, ...action.payload };
      return state;
    },
    clearAppointment(state: IAppointmentDetails) {
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
