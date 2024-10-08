import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import Link from 'next/link';

type ProfileAvatarProps = {};

const ProfileAvatar: React.FC<ProfileAvatarProps> = () => {
  return (
    <Link href={'./profile'}>
      <Avatar.Root>
        <Avatar.Image
          src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1685504283/1670986805718_x7kecr.jpg"
          alt="profile-pic"
          // fallback="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1685504283/1670986805718_x7kecr.jpg"
          className="w-[10vw] rounded-full"
        ></Avatar.Image>
      </Avatar.Root>
    </Link>
  );
};
export default ProfileAvatar;
