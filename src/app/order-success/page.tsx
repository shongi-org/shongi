// import Lottie from 'react-lottie';
'use client';
import React from 'react';
// import * as successAnimation from '@/assets/success-animation.json';
import { clearCart } from '@/lib/features/cart/addToCart';
import { useAppDispatch } from '@/lib/hooks';

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
  return (
    <div className="p-[2vw] relative w-full h-[60vh] flex items-center">
      <div className="w-full flex justify-center">
        <p className="font-poppins text-2xl">We have received your order.</p>
      </div>
    </div>
  );
};
export default Page;
