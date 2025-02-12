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
      src="https://res.cloudinary.com/dgayarw1f/image/upload/v1738956001/Search_01_eb48up.png"
      height={40}
      width={40}
      alt=""
      className=""
      onClick={() => {
        dispatch(changeSearchBarVisibilityState());
      }}
    ></Image>
  );
};
export default SearchIcon;
