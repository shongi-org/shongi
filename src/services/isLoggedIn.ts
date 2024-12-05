import { config } from '@/config';

export const isLoggedIn = async (token: string) => {
  return await fetch(`${config.backendURL}/api/auth/is-logged-in`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: token }),
  });
};
