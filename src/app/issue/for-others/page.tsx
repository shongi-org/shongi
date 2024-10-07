'use client';
import { useState } from 'react';
import { Input } from '@/components/Input';
import * as RadioGroup from '@radix-ui/react-radio-group';

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

  return (
    <div>
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

      <RadioGroup.Root
        className="flex flex-col space-y-4"
        value={formData.gender}
        onValueChange={handleGenderChange}
        aria-label="Select gender"
      >
        <div className="flex space-x-2">
          <RadioGroup.Item
            className={`w-full h-12 px-4 py-2 border-2 rounded-md text-center flex items-center justify-center cursor-pointer ${
              formData.gender === 'male'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700'
            }`}
            value="male"
            id="r1"
          >
            <label htmlFor="r1" className="cursor-pointer">
              Male
            </label>
          </RadioGroup.Item>

          <RadioGroup.Item
            className={`w-full h-12 px-4 py-2 border-2 rounded-md text-center flex items-center justify-center cursor-pointer ${
              formData.gender === 'female'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700'
            }`}
            value="female"
            id="r2"
          >
            <label htmlFor="r2" className="cursor-pointer">
              Female
            </label>
          </RadioGroup.Item>

          <RadioGroup.Item
            className={`w-full h-12 px-4 py-2 border-2 rounded-md text-center flex items-center justify-center cursor-pointer ${
              formData.gender === 'other'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700'
            }`}
            value="other"
            id="r3"
          >
            <label htmlFor="r3" className="cursor-pointer">
              Other
            </label>
          </RadioGroup.Item>
        </div>
      </RadioGroup.Root>
    </div>
  );
};

export default Others;
