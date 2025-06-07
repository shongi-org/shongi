'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import loader from '@/assets/loader.svg';
import { config } from '@/config';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberProvided, setIsPhoneNumberProvided] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const phoneNumberFromUrl = searchParams.get('phone_number');
    if (phoneNumberFromUrl) {
      setPhoneNumber(phoneNumberFromUrl);
      setIsPhoneNumberProvided(true);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const res = await fetch(`${config.backendURL}/api/auth/request-password-reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber: phoneNumber }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('An SMS with a reset token has been sent. Please check your phone.');
        setTimeout(() => {
          // Pass phone number to reset-password page if it was originally provided
          router.push('/reset-password');
        }, 3000);
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Forgot password error:', error);
    }
    setLoading(false);
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100 mt-3 pb-[9vh] lg:pt-[9vh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
        <h1 className="text-4xl font-bold mb-6 text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => {
                if (!isPhoneNumberProvided) {
                  setPhoneNumber(e.target.value);
                }
                setMessage('');
                setError('');
              }}
              className="h-14 text-xl "
              required
              disabled={isPhoneNumberProvided}
            />
          </div>
          {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
          {message && <p className="mt-2 text-green-500 text-sm">{message}</p>}
          <Button
            type="submit"
            className="h-14 text-xl mt-4 w-full bg-indigo-900"
            disabled={loading || !phoneNumber}
          >
            {loading ? (
              <Image
                className="w-[2rem] h-[2rem] text-white mx-auto"
                src={loader}
                alt="loader"
              />
            ) : (
              'Send Reset Link'
            )}
          </Button>
        </form>
        {/* Error/Message display moved below input and above button for better UX */}
      </div>
    </div>
  );
}
