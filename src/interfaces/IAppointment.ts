export type IAppointment = {
  id?: string;
  patient_details?: {
    name?: string;
    gender?: string;
    dob?: Date;
  };
  selectedDate?: Date;
  startTime?: string;
  endTime?: string;
  price?: number;
  homeAddress?: string;
  servicePointAddress?: string;
  paymentOption?: string;
  paymentMethod?: string;
  service_id?: string;
  service_name?: string;
  contactInfo?: string;
  transport?: string;
  agentGenderPreference?: string;
  additionalDetails?: string;
};
