import { config } from '@/config';
import { ICartItems } from '@/interfaces/ICartItems';

export const createOrder = async (cartItems: ICartItems) => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(`${config.backendURL}/api/order/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
    body: JSON.stringify(cartItems),
  });
};
