import MedicineCategories from '@/components/MedicineCategories';
import MedicineList from '@/components/MedicineList';
import SearchBar from '@/components/SearchBar';
import { Flex, Grid } from '@radix-ui/themes';
import React from 'react';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <Flex className="w-full" direction={'column'} align={'center'}>
      <SearchBar></SearchBar>
      <MedicineCategories></MedicineCategories>
      <MedicineList></MedicineList>
      <Grid></Grid>
    </Flex>
  );
};
export default page;
