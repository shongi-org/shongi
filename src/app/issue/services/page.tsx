'use client'
import RadioButton from '@/components/RadioButton';
import React, { useState } from 'react';

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

  const handleValueChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <h2 className="text-lg font-bold mb-4">Type of Service</h2>
      <RadioButton
        options={dummyData}
        selectedValue={selectedOption}
        onValueChange={handleValueChange}
        buttonWidth="flex-1 h-10" 
        orientation="vertical" 
      />
    </div>
  );
};

export default RadioButtonList;
