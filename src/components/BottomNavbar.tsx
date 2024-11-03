import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type BottomNavbarProps = object;

const BottomNavbar: React.FC<BottomNavbarProps> = () => {
  return (
    <div className="bg-white h-[8vh] w-full fixed bottom-0 z-10 shadow-inner flex space-between">
      <div className="w-1/5 p-5">
        <Link href="/issue/services">
          <Image
            src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730292455/r78nyfkpodkzyv4bp880.png"
            width={100}
            height={100}
            className="w-full"
            alt=""
          ></Image>
          <p></p>
        </Link>
      </div>
      <div className="w-1/5 p-5">
        <Link href={'/offers'}>
          <Image
            src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730292454/rqsytgy2wgja67p3a3dv.png"
            width={100}
            height={100}
            alt=""
          ></Image>
          <p></p>
        </Link>
      </div>
      <div className="w-1/5 p-3">
        <Link href={'/'}>
          <Image
            src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730292454/dvhuah5tzhgysxl2lxds.png"
            width={100}
            height={100}
            alt=""
          ></Image>
          <p></p>
        </Link>
      </div>
      <div className="w-1/5 p-5">
        <Link href={'/cart'}>
          <Image
            src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730292454/unb6etme3ue4yn2bw4he.png"
            width={100}
            height={100}
            alt=""
          ></Image>
          <p></p>
        </Link>
      </div>
      <div className="w-1/5 p-5">
        <Link href={'/profile'}>
          <Image
            src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730292455/pzmgg0mw21uvza1btsgm.png"
            width={100}
            height={100}
            alt=""
          ></Image>
          <p></p>
        </Link>
      </div>
    </div>
  );
};
export default BottomNavbar;
