import { config } from '@/config';

export const updateAppointment = async (
  appointmentId: string,
  update: object,
) => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(`${config.backendURL}/api/appointment/${appointmentId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
    body: JSON.stringify(update),
  });
};
