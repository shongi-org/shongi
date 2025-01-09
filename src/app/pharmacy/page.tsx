import MedicineCategories from '@/components/MedicineCategories';
import MedicineList from '@/components/MedicineList';
import SearchBar from '@/components/SearchBar';
import { Flex } from '@radix-ui/themes';
import React from 'react';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <Flex
      className="w-full overflow-y-scroll lg:mt-3"
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
