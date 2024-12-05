'use client';
import { changeSearchBarVisibilityState } from '@/lib/features/searchBar/searchBarVisibility';
import { useAppDispatch } from '@/lib/hooks';
import Image from 'next/image';
import React from 'react';

type SearchIconProps = object;

const SearchIcon: React.FC<SearchIconProps> = () => {
  const dispatch = useAppDispatch();

  return (
    <Image
      src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730314821/search-interface-symbol_spf0ct.png"
      height={20}
      width={25}
      alt=""
      className="w-[2rem] h-auto"
      onClick={() => {
        dispatch(changeSearchBarVisibilityState());
      }}
    ></Image>
  );
};
export default SearchIcon;
