import { config } from '@/config';

export const getAppointment = async (id: string) => {
  const JWTToken = localStorage.getItem('token');

  return await fetch(`${config.backendURL}/api/appointment/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
    // body: JSON.stringify(cartItems),
  });
};

export const getUpcomingAppointment = async () => {
  const JWTToken = localStorage.getItem('token');

  return await fetch(`${config.backendURL}/api/appointment/upcoming`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
    // body: JSON.stringify(cartItems),
  });
};
