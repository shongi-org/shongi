// components/Others.tsx

'use client';
import { useState } from 'react';
import { Input } from '@/components/Input';
import RadioButton from '@/components/RadioButton';

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
    <div>
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
  );
};

export default Others;
