import { config } from '@/config';

export const verifyOTP = async (mobileNumber: string, otp: string) => {
  return await fetch(`${config.backendURL}/api/auth/verify`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mobileNumber: mobileNumber,
      otp: otp,
    }),
  });
};
