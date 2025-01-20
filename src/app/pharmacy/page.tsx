import MedicineCategories from '@/components/MedicineCategories';
import MedicineList from '@/components/MedicineList';
import { Flex } from '@radix-ui/themes';
import React from 'react';
import SearchBar from './components/SearchBar';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <Flex
      className="w-full overflow-y-scroll lg:mt-3"
      direction={'column'}
      align={'center'}
    >
      <SearchBar
        visibility={true}
        // purpose={`service category_id=${category_id}`}
        searchEndPoint={`/medicine`}
      ></SearchBar>
      <MedicineCategories></MedicineCategories>
      <MedicineList></MedicineList>
    </Flex>
  );
};
export default page;
