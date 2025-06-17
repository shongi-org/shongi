// pages/otp.tsx
'use client';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { Suspense, useState } from 'react';
import loader from '@/assets/loader.svg';
import { login } from '@/services/login';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { createAppointment } from '@/services/createAppointment';
import { useAppSelector } from '@/lib/hooks';

// import OTPForm from './components/OTPForm';

const PasswordPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const searchParams = useSearchParams();
  const appointment = useAppSelector((state) => state.appointment);

  const phoneNumber = searchParams.get('phone_number');
  const from_cart = searchParams.get('from_cart');
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    login(phoneNumber as string, password)
      .then((res) => res.json())
      .then((res) => {
        if (res.message === 'Sign-in successful.') {
          localStorage.setItem('token', res.token);

          if (from_cart !== 'null') {
            createAppointment(appointment)
              .then(() => res.json())
              .then((res) => {
                router.push(`/order-success?order_id = ${res._id}`);
              })
              .catch((error) => {
                setLoading(false);
                console.log(error);
                setError(`Server Error. Please try again`);
              });
          } else {
            router.push('/');
          }
        } else {
          setError(res.message);
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleForgotPassword = () => {
    const currentPhoneNumber = searchParams.get('phone_number');
    if (currentPhoneNumber) {
      router.push(`/forgot-password?phone_number=${currentPhoneNumber}`);
    } else {
      router.push('/forgot-password');
    }
  };

  return (
    <Suspense>
      <div className=" flex items-center justify-center bg-gray-100 mt-3 pb-[9vh] lg:pt-[9vh]">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
          <h1 className="text-4xl font-bold mb-6 text-center">Password</h1>
          <Input
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setError('');
              setLoading(false);
              setPassword(e.currentTarget.value);
            }}
            className="h-14 text-xl "
            type="password"
            placeholder="Password"
          />
          <div>{error}</div>
          <div className="flex flex-col items-end">
            <Button
              className="h-14 text-xl mt-2 w-full bg-indigo-900"
              type="submit"
              onClick={handleSubmit}
              disabled={loading ? true : false}
            >
              {loading ? (
                <Image
                  className="w-[2rem] h-[2rem] text-white"
                  src={loader}
                  alt="loader"
                />
              ) : (
                'Submit'
              )}
            </Button>
          </div>
          <div className="flex flex-col items-end">
            <Button
              className="h-14 text-xl mt-2 w-full text-indigo-900 bg-white border-solid border-2 border-indigo-900"
              type="submit"
              onClick={handleForgotPassword}
              disabled={loading ? true : false}
            >
              {loading ? (
                <Image
                  className="w-[2rem] h-[2rem] text-white"
                  src={loader}
                  alt="loader"
                />
              ) : (
                'Forgot Password'
              )}
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default PasswordPage;
