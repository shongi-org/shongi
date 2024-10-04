// pages/otp.tsx
'use client';
import React from 'react';
import OTPForm from './components/OTPForm';

const OTPPage: React.FC = () => {
  const handleSubmit = (otp: string) => {
    alert(`OTP submitted: ${otp}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Enter OTP</h1>
        <OTPForm onSubmit={handleSubmit} length={6} />
      </div>
    </div>
  );
};

export default OTPPage;
