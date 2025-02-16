'use client';
import { IUser } from '@/interfaces/IUser';
import { useAppSelector } from '@/lib/hooks';
import { getUser } from '@/services/getUser';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type ProfilePictureProps = {
  children?: string;
};

const ProfilePicture: React.FC<ProfilePictureProps> = () => {
  const isLoggedIn = useAppSelector((state) => state.setIsLoggedIn);
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (isLoggedIn) {
      getUser()
        .then((res) => res.json())
        .then((res) => setUser(res));
    }
  }, [isLoggedIn]);

  console.log(user);

  return (
    <div className="w-[3vw]">
      {' '}
      {isLoggedIn === true ? (
        <Link href={'/profile'}>
          <Image
            src={user?.profile_picture as string}
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
