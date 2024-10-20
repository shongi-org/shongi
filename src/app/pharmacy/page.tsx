import MedicineCategories from '@/components/MedicineCategories';
import MedicineList from '@/components/MedicineList';
import SearchBar from '@/components/SearchBar';
import { Flex } from '@radix-ui/themes';
import React, { ReactNode } from 'react';

type pageProps = {
  children?: ReactNode;
};

const page: React.FC<pageProps> = () => {
  return (
    <Flex
      className="w-full overflow-y-scroll"
      direction={'column'}
      align={'center'}
    >
      <SearchBar></SearchBar>
      <MedicineCategories></MedicineCategories>
      <MedicineList></MedicineList>
    </Flex>
  );
};
export default page;
