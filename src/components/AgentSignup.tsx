'use client';

import { PhoneInput } from '@/components/PhoneInput';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';
import loader from '@/assets/loader.svg';
import { validatePhoneNumber } from '@/lib/utils/validatePhoneNumber';
import { accountExists } from '@/services/accountExists';
import { sendOTP } from '@/services/sendOTP';
// import greenTick from '@/app/assets/green_tick.png';

export default function AgentSignup() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  console.log(setError);

  const router = useRouter();

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setPhoneNumber(e.currentTarget.value);
  }

  // function handleSubmit() {
  //   setLoading(true);
  //   router.push(`https://shongi-agent.vercel.app/otp/${phoneNumber}`);
  // }

  function handleSubmit() {
    setLoading(true);
    if (validatePhoneNumber(phoneNumber) !== 'success') {
      setError(() => validatePhoneNumber(phoneNumber));
      setLoading(false);
    } else {
      setLoading(true);
      accountExists(phoneNumber)
        .then((res) => res.json())
        .then((res) => {
          if (res.message === 'user exists') {
            router.push(
              `https://shongi-agent.vercel.app/password?phone_number=${phoneNumber}`,
            );
            setLoading(false);
          } else {
            sendOTP(phoneNumber)
              .then((res) => res.json())
              .then((res) => {
                if (res.result === 'OTP Sent') {
                  router.push(
                    `https://shongi-agent.vercel.app/otp/${phoneNumber}`,
                  );
                  setLoading(false);
                } else {
                  setError('Server Error. Please try again');
                  setLoading(false);
                }
              });
          }
        });
    }
  }

  return (
    <Suspense>
      <div className=" flex items-center justify-center bg-gray-100 mt-3 pb-[9vh] lg:pt-[9vh]">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Signup as Agent
          </h1>
          <PhoneInput handleChange={handleChange}></PhoneInput>
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
              {error && <>Server Error please try again</>}
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
