'use client';
import { useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProfilePictureProps = {
  children?: string;
};

const ProfilePicture: React.FC<ProfilePictureProps> = () => {
  const isLoggedIn = useAppSelector((state) => state.setIsLoggedIn);
  return (
    <div className="w-[3vw]">
      {' '}
      {isLoggedIn ? (
        <Link href={'/profile'}>
          <Image
            src="https://res.cloudinary.com/dgayarw1f/image/upload/v1733056332/WhatsApp_Image_2022-12-14_at_08.53.02_tjiwxg.jpg"
            width={100}
            height={100}
            className="rounded-full w-full aspect-square object-cover"
            alt=""
          ></Image>
          <p></p>
        </Link>
      ) : (
        <Link href={'/login'}>
          <Image
            src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730292455/pzmgg0mw21uvza1btsgm.png"
            width={100}
            height={100}
            className="border-rounded"
            alt=""
          ></Image>
          <p></p>
        </Link>
      )}
    </div>
  );
};
export default ProfilePicture;
