'use client';
import RadioButton from '@/components/RadioButton';
import Topbar from '@/components/Topbar';
import { IoIosArrowBack } from 'react-icons/io';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { config } from '@/config';
import { ISubservice } from '@/interfaces/ISubservice';
import { useTranslation } from '@/hooks/useTranslation';

// const dummyData = [
//   { label: 'Physiotherapist', value: 'physiotherapist' },
//   { label: 'Home Doctor', value: 'home-Doctor' },
//   { label: 'Nurse', value: 'nurse' },
//   { label: 'Dressing', value: 'dressing' },
// ];

const RadioButtonList: React.FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get('_id');

  const [options, setOptions] = useState([
    {
      value: '',
      label: '',
    },
  ]);

  useEffect(() => {
    async function fetchServices() {
      const response = await fetch(
        `${config.backendURL}/api/service/sub-category/${id}`,
      );
      const data = await response.json();
      const mappedOptions = data.subCategories.map(
        (subCategory: ISubservice) => ({
          label: subCategory.name,
          value: subCategory._id,
        }),
      );
      setOptions(mappedOptions);
    }
    fetchServices();
  }, [id]);

  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].value,
  );

  const handleValueChange = (value: string) => {
    setSelectedOption(value);
    // console.log(pathname.replace('/issue/services', ''));
    if (pathname.replace('/issue/services', '').length) {
      router.push('/issue/schedule');
    } else {
      router.push(`/issue/services/${value}`);
    }
  };

  return (
    <>
      <Topbar
        title={t('navbar.services')}
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
