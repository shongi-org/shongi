'use client';
import { Box } from '@radix-ui/themes';
import { TextField } from '@radix-ui/themes';
import React, { ReactNode } from 'react';
// import { Magnifying } from '@radix-ui/react-icons'
import magnifyingGlass from '@/icons/magnifyingGlass.svg';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';

type SearchBarProps = {
  children?: ReactNode;
};

const SearchBar: React.FC<SearchBarProps> = () => {
  const searchBarVisibility = useAppSelector(
    (state) => state.searchBarVisibility,
  );
  return (
    <Box
      display={searchBarVisibility ? 'block' : 'none'}
      className={`w-[90vw] mt-2 rounded-full shadow-lg m-auto`}
    >
      <TextField.Root
        radius="full"
        className="w-full h-9 rounded-full font-poppins"
        size="3"
        placeholder="Search for Medicine"
      >
        <TextField.Slot className="">
          <Image src={magnifyingGlass} alt="search"></Image>
        </TextField.Slot>
      </TextField.Root>
    </Box>
  );
};
export default SearchBar;
