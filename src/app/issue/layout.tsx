// import CartButton from '@/components/CartButton';

import NavbarTop from '@/components/desktop/NavbarTop';
import SideNavbar from '@/components/desktop/SideNavbar';
import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Issue',
  description: 'Choose Issue',
};

// import SearchBarSpecific from '@/components/SearchBarSpecific';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" ">
      <NavbarTop></NavbarTop>

      <div className="hidden lg:block w-[20vw] fixed h-full border-gray-300 border-r-[1px]">
        <SideNavbar></SideNavbar>
      </div>
      {/* <SearchBarSpecific purpose="medicine" /> */}
      <div className="lg:w-[70vw] lg:ml-[25vw] lg:mt-[50px]">
        <>{children}</>
      </div>
      {/* <CartButton></CartButton> */}
    </div>
  );
}
