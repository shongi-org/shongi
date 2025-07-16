'use client';
import { useAppSelector } from '@/lib/hooks';
import { Box, Flex } from '@radix-ui/themes';
import React, { ReactNode } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

type SelectAreaOrderProps = {
  children?: ReactNode;
};


// const data: IArea[] = [
  //   {
    //     _id: 1,
//     label: 'Dhanmondi',
//     details: 'H57/1, R12/A, Dhanmondi',
//   },
//   {
//     id: 2,
//     label: 'Beribadh',
//     details: 'H57/1, R12/A, Beribadh',
//   },
// ];

const Area: React.FC<SelectAreaOrderProps> = () => {
  const appointment = useAppSelector((state) => state.appointment);
  const { t } = useTranslation();

  return (
    <div className="mt-4 font-poppins">
      <p className="text-xl mb-5 font-bold">{t('address.addresses')}</p>
      <Box className="w-full">
        {/* {data.map((item) => (
          <Flex
            justify={'center'}
            width={'full'}
            direction={'column'}
            align={'start'}
            className={`${item.id === selected ? 'border-[#283b77]' : 'border-gray-400'}  border-2 p-2 rounded-md mb-2 shadow-md`}
            key={item.id}
          >
            <p className="">{item.label}</p>
            <p className="">{item.details}</p>
          </Flex>
        ))} */}

        <Flex
          justify={'center'}
          width={'full'}
          direction={'column'}
          align={'start'}
          className={` border-gray-400 border-2 p-2 rounded-md mb-2 shadow-md`}
        >
          <p className="">{t('address.home')}</p>
          <p className="">{appointment.homeAddress}</p>
        </Flex>
        <Flex
          justify={'center'}
          width={'full'}
          direction={'column'}
          align={'start'}
          className={` border-[#283b77]  border-2 p-2 rounded-md mb-2 shadow-md`}
        >
          <p className="">Service Point Address</p>
          <p className="">{appointment.servicePointAddress}</p>
        </Flex>
      </Box>
    </div>
  );
};
export default Area;
