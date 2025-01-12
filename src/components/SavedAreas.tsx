'use client';
// import { useAppSelector } from '@/lib/hooks';
import { Box, Flex } from '@radix-ui/themes';
import React, { ReactNode } from 'react';

type SavedAreasProps = {
  children?: ReactNode;
};

const data: { _id: number; label: string; details: string }[] = [
  {
    _id: 1,
    label: 'Dhanmondi',
    details: 'H57/1, R12/A, Dhanmondi',
  },
  {
    _id: 2,
    label: 'Beribadh',
    details: 'H57/1, R12/A, Beribadh',
  },
];

const SavedAreas: React.FC<SavedAreasProps> = () => {
  const selected = 1;
  // const area = useAppSelector((state) => state.area);

  return (
    <div className="mt-4 font-poppins">
      <p className="text-xl mb-5 font-bold">Saved Areas</p>
      <Box className="w-full">
        {data.map((item) => (
          <Flex
            justify={'center'}
            width={'full'}
            direction={'column'}
            align={'start'}
            className={`${item._id === selected ? 'border-[#283b77]' : 'border-gray-400'}  border-2 p-2 rounded-md mb-2 shadow-md`}
            key={item._id}
          >
            <p className="">{item.label}</p>
            <p className="">{item.details}</p>
          </Flex>
        ))}
      </Box>
    </div>
  );
};
export default SavedAreas;
