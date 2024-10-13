'use client'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { FiPhone } from 'react-icons/fi';
import Button from '@/components/Button';

const DescribeProblemPage = () => {
  const [description, setDescription] = useState('');

  const handleCallClick = () => {
    const phoneNumber = '1234567890'; 
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto bg-white p-2 rounded-lg shadow-lg flex-1">

        <label className="block text-lg font-semibold mb-2">
          Describe your problem:
        </label>

        <ReactQuill
          value={description}
          onChange={setDescription}
          className="h-48 mb-4"
          placeholder="Please describe the issue you are facing..."
        />
      <Button type='button'>Submit</Button>
      </div>

      <button
        onClick={handleCallClick}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center"
      >
        <FiPhone className="text-2xl" /> 
      </button>
    </div>
  );
};

export default DescribeProblemPage;
