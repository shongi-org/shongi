// pages/otp.tsx
'use client';
import React, { useState } from 'react';
import OTPForm from '../components/OTPForm';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { verifyOTP } from '@/services/verifyOTP';

const OTPPage: React.FC = () => {
  const { mobileNumber }: { mobileNumber: string } = useParams();
  const searchParams = useSearchParams();

  const from_cart = searchParams.get('from_cart');

  const router = useRouter();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (otp: string) => {
    setError('');
    if (otp.length === 6) {
      setLoading(true);
      verifyOTP(mobileNumber, otp)
        .then((res) => res.json())
        .then((res) => {
          if (res.verified === true) {
            if (from_cart === 'true') {
              router.push(
                `/signup?phone_number=${mobileNumber}&from_cart=true`,
              );
            } else {
              router.push(`/signup?phone_number=${mobileNumber}`);
            }
          } else if (res.verified === false) {
            setLoading(false);
            setError('please enter the correct OTP');
          }
        })
        .catch((error) => {
          setLoading(false);
          setError('Server Error');
          console.log(error);
        });
    } else {
      setError('Please enter the full OTP');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Enter OTP</h1>
        <OTPForm
          onSubmit={handleSubmit}
          length={6}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default OTPPage;
