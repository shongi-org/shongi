import { config } from '@/config';

export const sendOTP = async (mobileNumber: string) => {
  return await fetch(`${config.backendURL}/api/auth/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mobileNumber: mobileNumber,
    }),
  });
};
