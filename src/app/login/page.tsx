'use client';

import { PhoneInput } from '@/components/PhoneInput';
import { Button } from '@/components/ui/button';
import { validatePhoneNumber } from '@/lib/utils/validatePhoneNumber';
import { sendOTP } from '@/services/sendOTP';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const service_id = searchParams.get('service_id');
  const service_name = searchParams.get('service_name');
  const from_cart = searchParams.get('from_cart');

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setPhoneNumber(e.currentTarget.value);
  }

  function handleSubmit() {
    if (validatePhoneNumber(phoneNumber) !== 'success') {
      setError(() => validatePhoneNumber(phoneNumber));
    } else {
      sendOTP(phoneNumber)
        .then((res) => res.json())
        .then((res) => {
          if (res.result === 'OTP Sent') {
            router.push(
              `/otp/${phoneNumber}?service_id=${service_id}&service_name=${service_name}&from_cart=${from_cart}`,
            );
          } else {
            setError('Server Error. Please try again');
          }
        })
        .catch((error) => {
          console.log(error);
          setError('server Error');
        });
    }
  }

  return (
    <Suspense>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Enter Phone Number
          </h1>
          <PhoneInput handleChange={handleChange}></PhoneInput>
          <div>{error}</div>
          <div className="flex flex-col items-end">
            <Button
              className="h-14 text-xl mt-2"
              type="submit"
              onClick={handleSubmit}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
