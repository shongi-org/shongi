import { config } from '@/config';

export const accountExists = async (mobileNumber: string) => {
  return await fetch(
    `${config.backendURL}/api/auth/check-account/${mobileNumber}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
};
