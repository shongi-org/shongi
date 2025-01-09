import Image from 'next/image';
import React from 'react';

type NotificationIconProps = object;

const NotificationIcon: React.FC<NotificationIconProps> = () => {
  return (
    <Image
      src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730314821/bell_c3gwr3.png"
      height={100}
      width={100}
      className="w-[10vw] lg:w-[3vw] h-auto"
      alt=""
    ></Image>
  );
};
export default NotificationIcon;
