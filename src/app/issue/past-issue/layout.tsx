import Topbar from '@/components/Topbar';

import { ReactNode } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="relative flex flex-col items-center">
        <Topbar
          title="Past Issues"
          leftIcon={<IoIosArrowBack fontSize={'24px'} />}
        ></Topbar>
        <>{children}</>
      </div>
    </>
  );
}
