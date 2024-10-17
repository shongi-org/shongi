'use client';

import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FiPhone } from 'react-icons/fi';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

const DescribeProblemPage = () => {
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleCallClick = () => {
    const phoneNumber = '1234567890';
    window.open(`tel:${phoneNumber}`);
  };

  function handleSubmit() {
    router.push('/issue/schedule');
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4 justify-between">
      <div className="w-full max-w-md mx-auto bg-white p-2 rounded-lg shadow-lg flex-1 flex flex-col justify-evenly items-center">
        <label className="block text-2xl font-semibold mb-2">
          Describe your problem
        </label>

        {/* Text Area (ReactQuill) */}
        <ReactQuill
          value={description}
          onChange={setDescription}
          className="h-[40vh] mb-4"
          placeholder="Please describe the issue you are facing..."
        />

        <Button type="button" className="w-full mt-24" onClick={handleSubmit}>
          Submit
        </Button>
      </div>

      {/* Call Button */}
      <button
        onClick={handleCallClick}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 shadow-lg mr-4 mb-4 hover:bg-blue-600 transition duration-200 flex items-center justify-center"
      >
        <FiPhone className="text-2xl" />
      </button>
    </div>
  );
};

export default DescribeProblemPage;
