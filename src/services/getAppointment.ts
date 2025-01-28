import { config } from '@/config';

export const getAppointment = async (id: string) => {
  const JWTToken = localStorage.getItem('token');
  console.log(id);
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
