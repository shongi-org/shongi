import { Box, IconButton } from '@radix-ui/themes';
import { TextField } from '@radix-ui/themes';
import React from 'react';
// import { Magnifying } from '@radix-ui/react-icons'
import magnifyingGlass from '@/icons/magnifyingGlass.svg';
import Image from 'next/image';

type SearchBarProps = {};

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <Box className="w-[90vw] mt-2 rounded-full">
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
