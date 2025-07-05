import { config } from '@/config';

export const getPastAppointments = async () => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(
    `${config.backendURL}/api/appointments/by-user`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: JWTToken as string,
      },
      // body: JSON.stringify(cartItems),
    },
  );
};
