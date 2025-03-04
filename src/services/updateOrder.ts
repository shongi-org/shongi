import { config } from '@/config';

export const updateOrder = async (order_id: string, update: object) => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(`${config.backendURL}/api/order/${order_id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
    body: JSON.stringify(update),
  });
};
