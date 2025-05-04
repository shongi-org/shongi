'use client';

import { PhoneInput } from '@/components/PhoneInput';
import { Button } from '@/components/ui/button';
import { validatePhoneNumber } from '@/lib/utils/validatePhoneNumber';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';
import loader from '@/assets/loader.svg';
import { agentExists } from '@/services/agentExists';
// import greenTick from '@/app/assets/green_tick.png';

export default function AgentSignup() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setPhoneNumber(e.currentTarget.value);
  }

  function handleSubmit() {
    if (validatePhoneNumber(phoneNumber) !== 'success') {
      setError(() => validatePhoneNumber(phoneNumber));
    } else {
      setLoading(true);
      agentExists(phoneNumber)
        .then((res) => res.json())
        .then((res) => {
          if (res.user.role === 'agent') {
            router.push(`/password`);
          } else {
            setError(res.message);
          }
          // setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError('server Error');
          setLoading(false);
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
