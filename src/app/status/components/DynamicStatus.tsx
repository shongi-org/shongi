'use client';
import React from 'react';
import LottieAnimation from '@/app/status/components/LottieAnimation';
import waiting from '@/../public/lottiefiles/waiting.json';

const DynamicStatus: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Waiting for call</h1>
      <LottieAnimation
        animationData={waiting}
        loop={true}
        autoplay={true}
        className="max-w-sm w-full h-auto"
      />
      <p className="mt-4 text-center text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default DynamicStatus;
