'use client';

import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SelectArea from '../SelectArea';
import SearchBarSpecific from './SearchBarSpecific';
import NotificationIcon from '../NotificationIcon';
// import CartIconTopbar from '../CartIconTopbar';
import ProfilePicture from '../ProfilePicture';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from '../LanguageSwitcher';

type NavbarTopProps = {
  children?: string;
};

const NavbarTop: React.FC<NavbarTopProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:block fixed top-0 w-full p-2 bg-white z-10">
      <Flex justify={'between'} align={'center'}>
        <Link href={'/'}>
          <Image
            src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730292454/dvhuah5tzhgysxl2lxds.png"
            width={50}
            height={50}
            className="ml-2"
            alt=""
          ></Image>
          <p></p>
        </Link>
        <p className="font-bold font-poppins">
          {t('greeting')},
          <br /> {t('welcomeToShongi')}
        </p>

        <SelectArea />
        <LanguageSwitcher />
        <SearchBarSpecific />
        <Flex className="w-[8vw]" justify={'between'} align={'center'}>
          <NotificationIcon></NotificationIcon>
          {/* <CartIconTopbar></CartIconTopbar> */}
          <ProfilePicture></ProfilePicture>
        </Flex>
      </Flex>
    </div>
  );
};
export default NavbarTop;
