// import Lottie from 'react-lottie';
import React from 'react';
// import * as successAnimation from '@/assets/success-animation.json';

type pageProps = object;
// const mobileOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: successAnimation,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice',
//   },
// };

const page: React.FC<pageProps> = () => {
  return (
    <div className="p-[2vw] relative w-full h-[60vh] flex items-center">
      <div className="w-full flex justify-center">
        <p className="font-poppins text-2xl">We have received your order.</p>
      </div>
    </div>
  );
};
export default page;
