import { config } from '@/config';

export const getPastOrders = async (page: number) => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(`${config.backendURL}/api/order/by-user?page=${page}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
    // body: JSON.stringify(cartItems),
  });
};
