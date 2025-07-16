import { useTranslation } from '@/hooks/useTranslation';
'use client';

import { PhoneInput } from '@/components/PhoneInput';
import { Button } from '@/components/ui/button';
import { validatePhoneNumber } from '@/lib/utils/validatePhoneNumber';
// import { sendOTP } from '@/services/sendOTP';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';
import loader from '@/assets/loader.svg';
import { createAppointment } from '@/services/createAppointment';
import { useAppSelector } from '@/lib/hooks';
import { accountExists } from '@/services/accountExists';
import { sendOTP } from '@/services/sendOTP';
// import greenTick from '@/app/assets/green_tick.png';

export default function LoginPage() {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingSkip, setLoadingSkip] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Prefill phone number from query param if present
    const phoneFromQuery = searchParams.get('phone_number');
    if (phoneFromQuery) {
      setPhoneNumber(phoneFromQuery);
    }
  }, [searchParams]);

  // const service_id = searchParams.get('service_id');
  // const service_name = searchParams.get('service_name');
  const from_cart = searchParams.get('from_cart');
  // const price = searchParams.get('price');
  const appointment = useAppSelector((state) => state.appointment);
  console.log(appointment);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setPhoneNumber(e.currentTarget.value);
  }

  async function handleSkip() {
    setLoadingSkip(true);
    try {
      const response = await createAppointment(appointment);
      const order = await response.json();
      console.log(order.message);
      if (order._id && !order.sms) {
        router.push(`/order-success?order_id = ${order._id}&sms_error=true`);
      } else if (order._id) {
        router.push(`/order-success?order_id = ${order._id}&sms_error=false`);
      } else setError('Server Error Please try again');
    } catch (error) {
      setLoading(false);
      setError(`Server Error : ${error}. Please try again`);
    }
  }

  function handleSubmit() {
    if (validatePhoneNumber(phoneNumber) !== 'success') {
      setError(() => validatePhoneNumber(phoneNumber));
    } else {
      setLoading(true);
      accountExists(phoneNumber)
        .then((res) => res.json())
        .then((res) => {
          if (res.message === 'user exists') {
            router.push(
              `/password?from_cart=${from_cart}&phone_number=${phoneNumber}`,
            );
          } else {
            sendOTP(phoneNumber)
              .then((res) => res.json())
              .then((res) => {
                if (res.result === 'OTP Sent') {
                  router.push(`/otp/${phoneNumber}?from_cart=${from_cart}`);
                } else {
                  setError('Server Error. Please try again');
                }
              });
          }
        });
    }
  }

  return (
    <Suspense>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
          <Button
            className="h-14 text-xl mt-2 w-full bg-indigo-900 mb-2"
            type="submit"
            onClick={handleSkip}
            disabled={loadingSkip ? true : false}
          >
            {loadingSkip ? (
              <Image
                className="w-[2rem] h-[2rem] text-white"
                src={loader}
                alt="loader"
              />
            ) : (
              t('guest.moveOn')
            )}
            {error && <>Server Error please try again</>}
          </Button>

          <h1 className="text-2xl font-bold mb-6 text-center">
            <br />
            {t('or')} <br />
            <br />
            {t('auth.loginPhone')}
          </h1>
          <PhoneInput handleChange={handleChange} value={phoneNumber} />
          <div>{error}</div>
          <div className="flex flex-col items-end">
            <Button
              className="h-14 text-xl mt-2 w-full bg-white border-solid border-indigo-900 border-2 text-indigo-900"
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
                t('form.submit')
              )}
              {error && <>Server Error please try again</>}
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
