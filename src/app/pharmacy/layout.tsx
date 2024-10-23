import CartButton from '@/components/CartButton';
import Topbar from '@/components/Topbar';

import { ReactNode } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import CartIconTopbar from '@/components/CartIconTopbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen flex flex-col items-center ">
      <Topbar
        title="Pharmacy"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
        rightIcon={<CartIconTopbar></CartIconTopbar>}
      ></Topbar>
      <>{children}</>
      {/* <CartButton></CartButton> */}
    </div>
  );
}
