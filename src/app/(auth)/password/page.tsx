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
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setIsLoggedIn } from '@/lib/features/auth/isLoggedIn';

// import OTPForm from './components/OTPForm';

const PasswordPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [forgotError, setForgotError] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const searchParams = useSearchParams();
  const appointment = useAppSelector((state) => state.appointment);
  const dispatch = useAppDispatch();

  const phoneNumber = searchParams.get('phone_number');
  const from_cart = searchParams.get('from_cart');
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    setLoginError(null);
    login(phoneNumber as string, password)
      .then((res) => res.json())
      .then((res) => {
        if (res.message === 'Sign-in successful.') {
          localStorage.setItem('token', res.token);
          dispatch(setIsLoggedIn(true));

          if (from_cart !== 'null') {
            createAppointment(appointment)
              .then((res) => res.json())
              .then((res) => {
                router.push(`/order-success?order_id=${res._id}`);
              })
              .catch((error) => {
                setLoading(false);
                setLoginError('Server Error. Please try again');
              });
          } else {
            router.push('/');
          }
        } else {
          setLoginError(res.message || 'Server Error. Please try again');
          setLoading(false);
        }
      })
      .catch(() => {
        setLoginError('Server Error. Please try again');
        setLoading(false);
      });
  };

  const handleForgotPassword = () => {
    setForgotError(null);
    try {
      const currentPhoneNumber = searchParams.get('phone_number');
      if (currentPhoneNumber) {
        router.push(`/forgot-password?phone_number=${currentPhoneNumber}`);
      } else {
        router.push('/forgot-password');
      }
    } catch {
      setForgotError('Server Error. Please try again');
    }
  };

  return (
    <Suspense>
      <div className=" flex items-center justify-center bg-gray-100 mt-3 pb-[9vh] lg:pt-[9vh]">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
          <h1 className="text-4xl font-bold mb-6 text-center">Password</h1>
          <Input
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setLoginError(null);
              setLoading(false);
              setPassword(e.currentTarget.value);
            }}
            className="h-14 text-xl "
            type="password"
            placeholder="Password"
            value={password}
          />
          <div className="min-h-[1.5rem]"></div>
          <div className="flex flex-col items-end">
            <Button
              className="h-14 text-xl mt-2 w-full bg-indigo-900"
              type="button"
              onClick={handleSubmit}
              disabled={loading}
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
            {loginError && (
              <span className="text-red-600 text-sm mt-2 w-full text-center block">
                {loginError}
              </span>
            )}
          </div>
          <div className="flex flex-col items-end">
            <Button
              className="h-14 text-xl mt-2 w-full text-indigo-900 bg-white border-solid border-2 border-indigo-900"
              type="button"
              onClick={handleForgotPassword}
              disabled={loading}
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
            {forgotError && (
              <span className="text-red-600 text-sm mt-2 w-full text-center block">
                {forgotError}
              </span>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default PasswordPage;
