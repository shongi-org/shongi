'use client';
import RadioButton from '@/components/RadioButton';
import Topbar from '@/components/Topbar';
import { IoIosArrowBack } from 'react-icons/io';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const dummyData = [
  { label: 'Physiotherapist', value: 'physiotherapist' },
  { label: 'Home Doctor', value: 'home-Doctor' },
  { label: 'Nurse', value: 'nurse' },
  { label: 'Dressing', value: 'dressing' },
];

const RadioButtonList: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(
    dummyData[0].value,
  );
  const router = useRouter();

  const handleValueChange = (value: string) => {
    setSelectedOption(value);
    router.push('/dashboard');
  };

  return (
    <>
      <Topbar
        title="Services"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full p-4">
          <RadioButton
            options={dummyData}
            selectedValue={selectedOption}
            onValueChange={handleValueChange}
            buttonWidth="flex-1 h-10 p-3 w-full"
            orientation="vertical"
          />
        </div>
      </div>
    </>
  );
};

export default RadioButtonList;
