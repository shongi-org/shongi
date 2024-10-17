'use client';
import { useState } from 'react';
import { Input } from '@/components/Input';
import RadioButton from '@/components/RadioButton';
import { IoIosArrowBack } from 'react-icons/io';
import Topbar from '@/components/Topbar';
import FloatingCallButton from '@/components/FloatingCallButton';

const Others = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    gender: 'male',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenderChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: value,
    }));
  };

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  return (
    <>
      <Topbar
        title="For Others"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      />

      <div className="flex items-center justify-center min-h-screen w-full p-4">
        <div className="w-full space-y-2">
          <h2 className="text-lg font-bold mb-4">User Information</h2>
          <Input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
          />

          <RadioButton
            options={genderOptions}
            selectedValue={formData.gender}
            onValueChange={handleGenderChange}
            buttonWidth="w-full"
          />
        </div>
      </div>
      <FloatingCallButton phoneNumber="1234567890" />
    </>
  );
};

export default Others;
