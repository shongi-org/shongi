import { config } from '@/config';

export const getAppointmentForReview = async (appointmentId: string) => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(
    `${config.backendURL}/api/reviews/appointment/${appointmentId}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: JWTToken as string,
      },
    }
  );
};
