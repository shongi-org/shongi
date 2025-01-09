import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FloatingCallButton from './FloatingCallButton';
import { useAppSelector } from '@/lib/hooks';

type BottomNavbarProps = object;

const BottomNavbar: React.FC<BottomNavbarProps> = () => {
  const cartItems = useAppSelector((state) => state.addToCart.items);
  const isLoggedIn = useAppSelector((state) => state.setIsLoggedIn);

  return (
    <>
      <FloatingCallButton phoneNumber="1234567890" />
      <div className="bg-white h-[9vh] w-full fixed bottom-0 z-10 shadow-inner flex space-between pb-4 lg:hidden">
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
        <div className="w-1/5 p-5 relative">
          <Link href={'/cart'}>
            <Image
              src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730292454/unb6etme3ue4yn2bw4he.png"
              width={100}
              height={100}
              alt=""
            />
            <div className="absolute top-[-20px] right-[15px] bg-indigo-900 pl-[6px] pt-[1px] pb-[1px] pr-[6px] rounded-full mt-8 text-white font-poppins">
              {' '}
              {Object.values(cartItems).reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.price * currentValue.quantity,
                0,
              )}
              Tk
            </div>
          </Link>
        </div>
        <div className="w-1/5 p-5">
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
      </div>
    </>
  );
};
export default BottomNavbar;
