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

const paymentAmountOptions = [
  {
    label: 'Pay Full',
    value: '100%',
  },
  {
    label: 'Pay 30%',
    value: '30%',
  },
  {
    label: 'Pay After Service',
    value: '0%',
  },
];

const paymentOptions = [
  {
    label: 'Bkash',
    value: 'bkash',
  },
  {
    label: 'Nagad',
    value: 'nagad',
  },
  {
    label: 'Card',
    value: 'card',
  },

  {
    label: 'Cash',
    value: 'cash',
  },
];

export default function SchedulePage() {
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
        title="Payment Options"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      />
      <div className="min-h-[90vh] lg:min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-sm w-full p-6 bg-white rounded-xl shadow-lg flex flex-col justify-evenly">
          <p className="font-poppins text-2xl text-center m-4 font-bold">
            Choose payment options
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <SelectComponent
              handleChange={(e) => setPaymentAmount(e)}
              options={paymentAmountOptions}
              placeholder="Select Amount"
            />

            <SelectComponent
              handleChange={(e) => setPaymentMethod(e)}
              options={paymentOptions}
              placeholder="Select Payment Method"
            />

            <div>
              <Button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 mb-[10vh] text-xl"
                onClick={handleSubmit}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
        <FloatingCallButton phoneNumber="1234567890" />
      </div>
    </>
  );
}
