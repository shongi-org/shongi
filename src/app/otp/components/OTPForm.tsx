'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as Form from '@radix-ui/react-form';
import OTPInput from './OTPInput';
import Button from '@/components/Button';
import Image from 'next/image';
import loader from '@/assets/loader.svg';

interface OTPFormProps {
  onSubmit: (otp: string) => void;
  length?: number;
  error?: string;
  loading?: boolean;
}

const OTPForm: React.FC<OTPFormProps> = ({
  onSubmit,
  length = 6,
  error,
  loading,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (otp[index] !== '') {
        handleChange('', index);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData('text/plain')
      .replace(/\D/g, '')
      .slice(0, length);
    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      newOtp[index] = char;
    });
    setOtp(newOtp);
    inputRefs.current[Math.min(pastedData.length, length - 1)]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length === length) {
      onSubmit(otpString);
    }
  };

  const inputRefCallback = useCallback(
    (index: number) => (el: HTMLInputElement | null) => {
      inputRefs.current[index] = el;
    },
    [],
  );

  return (
    <Form.Root onSubmit={handleSubmit}>
      <div className="flex justify-between mb-6">
        {otp.map((data, index) => (
          <OTPInput
            key={index}
            value={data}
            onChange={(value) => handleChange(value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            index={index}
            ref={inputRefCallback(index)}
          />
        ))}
      </div>
      <div>{error}</div>
      <Form.Submit asChild>
        <Button
          className="w-full bg-indigo-900 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          type="submit"
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
        </Button>
      </Form.Submit>
    </Form.Root>
  );
};

export default OTPForm;
