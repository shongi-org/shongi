'use client';
import NavbarTop from '@/components/desktop/NavbarTop';
import SideNavbar from '@/components/desktop/SideNavbar';
import Topbar from '@/components/Topbar';
import { useTranslation } from '@/hooks/useTranslation';

import { ReactNode } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Layout({ children }: { children: ReactNode }) {
  // const [orderSuccessful, setOrderSuccessful] = useState<string>('');
  const { t } = useTranslation();

  return (
    <>
      <NavbarTop></NavbarTop>

      <div className="hidden lg:block w-[20vw] fixed h-full border-gray-300 border-r-[1px]">
        <SideNavbar></SideNavbar>
      </div>
      {/* <SearchBarSpecific purpose="medicine" /> */}
      <div className="lg:w-[70vw] lg:ml-[25vw] lg:mt-[50px]">
        <div className="relative flex flex-col items-center">
          <Topbar
            title={t('appointment.title')}
            leftIcon={<IoIosArrowBack fontSize={'24px'} />}
          ></Topbar>
          <>{children}</>
        </div>
      </div>
    </>
  );
}
