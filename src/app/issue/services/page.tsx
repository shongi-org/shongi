'use client';
import RadioButton from '@/components/RadioButton';
import Topbar from '@/components/Topbar';
import { IoIosArrowBack } from 'react-icons/io';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import * as dummyData from '@/data/service.json';

// const dummyData = [
//   { label: 'Physiotherapist', value: 'physiotherapist' },
//   { label: 'Home Doctor', value: 'home-Doctor' },
//   { label: 'Nurse', value: 'nurse' },
//   { label: 'Dressing', value: 'dressing' },
// ];

const RadioButtonList: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const data: { [key: string]: object } = dummyData;

  const options = pathname.replace('/issue/services', '')
    ? Object.values(
        data[
          pathname.replace('/issue/services', '').replace('/', '') as string
        ],
      ).map((subservice) => {
        return {
          label: subservice.subserviceName,
          value: subservice.id,
        };
      })
    : Object.keys(dummyData).map((service) => {
        return {
          label: service.replace(/-/g, ' ').toUpperCase(),
          value: service,
        };
      });
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].value,
  );

  const handleValueChange = (value: string) => {
    setSelectedOption(value);
    console.log(pathname.replace('/issue/services', ''));
    if (pathname.replace('/issue/services', '').length) {
      router.push('/issue/schedule');
    } else {
      router.push(`/issue/services/${value}`);
    }
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
            options={options}
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
