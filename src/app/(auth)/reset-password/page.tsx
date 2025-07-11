'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import loader from '@/assets/loader.svg';
import { config } from '@/config';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // Get phone number from query param if present
  const phoneNumberFromQuery = searchParams.get('phone_number') || '';
  const [phoneNumber, setPhoneNumber] = useState(phoneNumberFromQuery);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${config.backendURL}/api/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword, confirmPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Password has been reset successfully. Redirecting to login...');
        setTimeout(() => {
          // Always pass phoneNumber from query param if available
          router.push(`/login?phone_number=${encodeURIComponent(phoneNumber)}`);
        }, 3000);
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Reset password error:', error);
    }
    setLoading(false);
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100 mt-3 pb-[9vh] lg:pt-[9vh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
        <h1 className="text-4xl font-bold mb-6 text-center">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              id="token"
              placeholder="Reset Token"
              value={token}
              onChange={(e) => {
                setToken(e.target.value);
                setMessage('');
                setError('');
              }}
              className="h-14 text-xl"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              id="newPassword"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setMessage('');
                setError('');
              }}
              className="h-14 text-xl mt-2"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setMessage('');
                setError('');
              }}
              className="h-14 text-xl mt-2"
              required
            />
          </div>
          {/* Optionally, allow user to enter phone number if not present in token response */}
          {/* <div>
            <Input
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number (optional)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="h-14 text-xl mt-2"
            />
          </div> */}
          {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
          {message && <p className="mt-2 text-green-500 text-sm">{message}</p>}
          <Button
            type="submit"
            className="h-14 text-xl mt-4 w-full bg-indigo-900"
            disabled={loading}
          >
            {loading ? (
              <Image
                className="w-[2rem] h-[2rem] text-white mx-auto"
                src={loader}
                alt="loader"
              />
            ) : (
              'Reset Password'
            )}
          </Button>
        </form>
        {/* {message && <p className="mt-4 text-center">{message}</p>}
        {error && <p className="mt-4 text-center" style={{ color: 'red' }}>{error}</p>} */}
      </div>
    </div>
  );
}
