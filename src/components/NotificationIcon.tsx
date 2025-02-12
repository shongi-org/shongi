import Image from 'next/image';
import React from 'react';

type NotificationIconProps = object;

const NotificationIcon: React.FC<NotificationIconProps> = () => {
  return (
    <Image
      src="https://res.cloudinary.com/dgayarw1f/image/upload/v1738956002/Notification_01_q8jhkz.png"
      height={70}
      width={70}
      className="w-auto lg:w-[3vw] h-12"
      alt=""
    ></Image>
  );
};
export default NotificationIcon;
