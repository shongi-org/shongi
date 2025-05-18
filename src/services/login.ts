import { config } from '@/config';

export const login = async (phoneNumber: string, password: string) => {
  return await fetch(`${config.backendURL}/api/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone_number: phoneNumber, password }),
  });
};
