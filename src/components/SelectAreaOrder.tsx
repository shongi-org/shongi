import { IArea } from '@/interfaces/IArea';
import { Box, Flex } from '@radix-ui/themes';
import React, { ReactNode } from 'react';

type SelectAreaOrderProps = {
  children?: ReactNode;
};

const data: IArea[] = [
  {
    id: 1,
    label: 'Dhanmondi',
    details: 'H57/1, R12/A, Dhanmondi',
  },
  {
    id: 2,
    label: 'Beribadh',
    details: 'H57/1, R12/A, Beribadh',
  },
];

const SelectAreaOrder: React.FC<SelectAreaOrderProps> = () => {
  const selected = 1;
  return (
    <div className="mt-4 font-poppins">
      <p className="text-xl mb-5 font-bold">Select Area</p>
      <Box className="w-full">
        {data.map((item) => (
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
        ))}
      </Box>
    </div>
  );
};
export default SelectAreaOrder;
