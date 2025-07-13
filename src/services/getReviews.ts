import { config } from '@/config';

export const getReviews = async () => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(`${config.backendURL}/api/reviews`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
  });
};
