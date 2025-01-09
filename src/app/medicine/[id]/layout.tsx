// import SearchBarSpecific from '@/components/SearchBarSpecific';
import Topbar from '@/components/Topbar';
import { Box } from '@radix-ui/themes';
import { ReactNode } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import type { Metadata } from 'next';
import NavbarTop from '@/components/desktop/NavbarTop';
import SideNavbar from '@/components/desktop/SideNavbar';

export const metadata: Metadata = {
  title: 'Medicine',
  description: '',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarTop></NavbarTop>

      <div className="hidden lg:block w-[20vw] fixed h-full border-gray-300 border-r-[1px]">
        <SideNavbar></SideNavbar>
      </div>
      {/* <SearchBarSpecific purpose="medicine" /> */}
      <div className="lg:w-[70vw] lg:ml-[25vw] lg:mt-[50px]">
        <div className="relative flex flex-col items-center overflow-y-scroll no-scrollbar">
          <Topbar
            title="Paracetamol"
            leftIcon={<IoIosArrowBack fontSize={'24px'} />}
          ></Topbar>
          {/* <SearchBarSpecific /> */}
          <div className="pb-[18vh]">{children}</div>
          <Box className="fixed bottom-[9vh] mb-2">
            <Box className="w-[96vw] lg:w-[50vw] bg-white text-primary border-solid border-2 border-primary font-poppins font-bold text-xl p-3 text-center rounded-md mb-2">
              Add to Cart
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
