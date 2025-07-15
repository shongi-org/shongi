'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FloatingCallButton from './FloatingCallButton';
import { useAppSelector } from '@/lib/hooks';
import { useTranslation } from '@/hooks/useTranslation';

type BottomNavbarProps = object;

const BottomNavbar: React.FC<BottomNavbarProps> = () => {
  // const cartItems = useAppSelector((state) => state.addToCart.items);
  const isLoggedIn = useAppSelector((state) => state.setIsLoggedIn);
  const { t } = useTranslation();

  return (
    <>
      <FloatingCallButton phoneNumber="+8801577149428" />
      <div className="bg-white h-[9vh] w-full fixed bottom-0 z-10 shadow-inner flex justify-evenly pb-4 lg:hidden">
        {isLoggedIn && (
          <div className="w-1/5 p-3">
            <Link href="/past-orders">
              <Image
                src="https://res.cloudinary.com/dgayarw1f/image/upload/v1738956002/Order_01_z83fzi.png"
                width={100}
                height={100}
                className=""
                alt={t('navbar.pastOrders')}
              />
              <p></p>
            </Link>
          </div>
        )}
        {isLoggedIn && (
          <div className="w-1/5 p-3">
            <Link href="/patients">
              <Image
                src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730292455/pzmgg0mw21uvza1btsgm.png"
                width={100}
                height={100}
                alt={t('patients.title')}
              />
              <p></p>
            </Link>
          </div>
        )}
        {/* <div className="w-1/5 p-3">
          <Link href={'/offers'}>
            <Image
              src="https://res.cloudinary.com/dgayarw1f/image/upload/v1730292454/rqsytgy2wgja67p3a3dv.png"
              width={100}
              height={100}
              alt=""
            ></Image>
            <p></p>
          </Link>
        </div> */}
        <div className="w-1/5 p-3">
          <Link href={'/'}>
            <Image
              src="https://res.cloudinary.com/dlezm6lou/image/upload/v1747480543/home-button_m9r42o.png"
              width={100}
              height={100}
              alt={t('navbar.home')}
            ></Image>
            <p></p>
          </Link>
        </div>
        {/* <div className="w-1/5 p-2 relative">
          <Link href={'/cart'}>
            <Image
              src="https://res.cloudinary.com/dgayarw1f/image/upload/v1738956001/Cart_01_mn8gkq.png"
              width={100}
              height={100}
              alt={t('cart.title')}
            />
            {/* <div className="absolute bottom-[-10px] right-[-2px] bg-white border-solid border-2 border-indigo-900 pl-[6px] pt-[1px] pb-[1px] pr-[6px] rounded-full mt-8 text-indigo-900 font-poppins">
              {' '}
              {Object.values(cartItems).reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.price * currentValue.quantity,
                0,
              )}
              Tk
            </div> 
          </Link>
        </div> */}
        <div className="w-1/5 p-3">
          {isLoggedIn ? (
            <Link href={'/profile'}>
              <Image
                src="https://res.cloudinary.com/dgayarw1f/image/upload/v1733056332/WhatsApp_Image_2022-12-14_at_08.53.02_tjiwxg.jpg"
                width={100}
                height={100}
                className="rounded-full w-full aspect-square object-cover"
                alt={t('navbar.profile')}
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
                alt={t('navbar.login')}
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
