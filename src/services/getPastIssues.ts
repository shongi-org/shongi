import { config } from '@/config';

export const getPastIssues = async (for_someone: boolean) => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(
    `${config.backendURL}/api/issue?for_someone=${for_someone}`,
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
