import { config } from '@/config';
import { IAppointment } from '@/interfaces/IAppointment';

export const createAppointment = async (appointmentDetails: IAppointment) => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(`${config.backendURL}/api/appointments/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
    body: JSON.stringify(appointmentDetails),
  });
};

// {
//   "patient_details": {
//       "name": "Noel",
//       "gender": "female",
//       "dob": "2025-05-05T18:00:00.000Z"
//   },
//   "selectedDate": "2025-05-13T18:00:00.000Z",
//   "startTime": "11:00",
//   "homeAddress": "aaa",
//   "servicePointAddress": "aaa",
//   "service_id": null,
//   "contactInfo": "aa",
//   "transport": "own-car",
//   "agentGenderPreference": "male",
//   "service_name": "4 Hour Service",
//   "price": 500,
//   "additionalDetails": "aa",
//   "endTime": "15:00"
// }
