// import Lottie from 'react-lottie';
'use client';
import React from 'react';
// import * as successAnimation from '@/assets/success-animation.json';
import { clearCart } from '@/lib/features/cart/addToCart';
import { useAppDispatch } from '@/lib/hooks';
// import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

type pageProps = object;
// const mobileOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: successAnimation,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice',
//   },
// };

const Page: React.FC<pageProps> = () => {
  const dispatch = useAppDispatch();
  dispatch(clearCart());
  const searchParams = useSearchParams();
  const sms_error = searchParams.get('sms_error');

  return (
    <div className="p-[2vw] relative w-full h-[90vh] lg:h-[60vh] flex items-center">
      <div className="w-full flex justify-center">
        <p className="font-poppins text-3xl text-center text-bold">
          We have received your order!
          <br />
          {sms_error === 'true'
            ? 'But we couldnt send an SMS. Our Agent will contact you shortly.'
            : 'You will get an SMS confirmation shortly.'}
        </p>
      </div>
    </div>
  );
};
export default Page;
