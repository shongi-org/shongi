'use client';

import { useState } from 'react';

import 'react-day-picker/dist/style.css';
import { useRouter } from 'next/navigation';
import FloatingCallButton from '@/components/FloatingCallButton';
import '@/styles/schedule.page.css';
import Button from '@/components/Button';
// import { CiCircleInfo } from 'react-icons/ci';
import Topbar from '@/components/Topbar';
import { IoIosArrowBack } from 'react-icons/io';
// import { useAppSelector } from '@/lib/hooks';

import SelectComponent from '@/components/ui/select';
import { useAppDispatch } from '@/lib/hooks';
import { setAppointment } from '@/lib/features/appointment/appointmentDetails';
import { useTranslation } from '@/hooks/useTranslation';



export default function SchedulePage() {
  const { t } = useTranslation();

  const paymentAmountOptions = [
    // {
    //   label: t('payment.payFull'),
    //   value: '100%',
    // },
    // {
    //   label: t('payment.pay30'),
    //   value: '30%',
    // },
    {
      label: t('payment.payAfterService'),
      value: '0%',
    },
  ];

  const paymentOptions = [
    {
      label: t('payment.methods.bkash'),
      value: 'bkash',
    },
    {
      label: t('payment.methods.nagad'),
      value: 'nagad',
    },
    {
      label: t('payment.methods.card'),
      value: 'card',
    },
    {
      label: t('payment.methods.cash'),
      value: 'cash',
    },
  ];

  // Add this for conditional cash-only option
  const cashOnlyOption = [
    {
      label: t('payment.methods.cash'),
      value: 'cash',
    },
  ];

  const router = useRouter();

  const [paymentAmount, setPaymentAmount] = useState<string>();
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const dispatch = useAppDispatch();


  // const appointment = useAppSelector((state) => state.appointment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentAmount || !paymentMethod) {
      alert('Please select a payment Amount and payment Method!');
      return;
    }

    dispatch(
      setAppointment({
        paymentOption: paymentAmount,
        paymentMethod: paymentMethod,
      }),
    );
    router.push(
      `/cart?payment_amount=${paymentAmount}&payment_method=${paymentMethod}`,
    );
  };



  return (
    <>
      <Topbar
        title={t('payment.option')}
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      />
      <div className="min-h-[90vh] lg:min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-sm w-full p-6 bg-white rounded-xl shadow-lg flex flex-col justify-evenly">
          <p className="font-poppins text-2xl text-center m-4 font-bold">
            {t('payment.chooseOption')}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <SelectComponent
              handleChange={(e) => setPaymentAmount(e)}
              options={paymentAmountOptions}
              placeholder={t('amount')}
            />

            <SelectComponent
              handleChange={(e) => setPaymentMethod(e)}
              options={
                paymentAmount === '0%'
                  ? cashOnlyOption
                  : paymentAmount === '100%' || paymentAmount === '30%'
                    ? paymentOptions.filter((opt) => opt.value !== 'cash')
                    : paymentOptions
              }
              placeholder={t('payment.method')}
            />

            <div>
              <Button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 mb-[10vh] text-xl"
                onClick={handleSubmit}
              >
                {t('form.next')}
              </Button>
            </div>
          </form>
        </div>
        <FloatingCallButton phoneNumber="1234567890" />
      </div>
    </>
  );
}
