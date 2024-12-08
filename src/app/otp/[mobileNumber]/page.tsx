// pages/otp.tsx
'use client';
import React, { useState } from 'react';
import OTPForm from '../components/OTPForm';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { verifyOTP } from '@/services/verifyOTP';
import { useAppDispatch } from '@/lib/hooks';
import { setIsLoggedIn } from '@/lib/features/auth/isLoggedIn';

const OTPPage: React.FC = () => {
  const { mobileNumber }: { mobileNumber: string } = useParams();
  const searchParams = useSearchParams();
  const service_id = searchParams.get('service_id');
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = (otp: string) => {
    if (otp.length === 6) {
      verifyOTP(mobileNumber, otp)
        .then((res) => res.json())
        .then((res) => {
          if (res.verified === true) {
            if (res.token) {
              localStorage.setItem('token', res.token);
              dispatch(setIsLoggedIn(true));
              if (service_id) {
                router.push(`/issue/docs?service_id=${service_id}`);
              } else router.push(`/`);
            } else {
              if (service_id) {
                router.push(
                  `/signup?service_id=${service_id}&phone_number=${mobileNumber}`,
                );
              } else {
                router.push(`/signup?phone_number=${mobileNumber}`);
              }
            }
          } else if (res.verified === false) {
            setError('please enter the correct OTP');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Enter OTP</h1>
        <OTPForm onSubmit={handleSubmit} length={6} error={error} />
      </div>
    </div>
  );
};

export default OTPPage;
