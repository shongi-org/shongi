import { config } from '@/config';

export const getOrder = async (id: string) => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(`${config.backendURL}/api/order/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
    // body: JSON.stringify(cartItems),
  });
};
