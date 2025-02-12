'use client';
import NavbarTop from '@/components/desktop/NavbarTop';
import SideNavbar from '@/components/desktop/SideNavbar';
import Topbar from '@/components/Topbar';
import { Box, Flex } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { ReactNode, Suspense } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  // const [orderSuccessful, setOrderSuccessful] = useState<string>('');
  function handleSeeRunningOrders() {
    router.push('/past-orders');
  }

  return (
    <>
      <Suspense>
        <div className=" ">
          <NavbarTop></NavbarTop>

          <div className="hidden lg:block w-[20vw] fixed h-full border-gray-300 border-r-[1px]">
            <SideNavbar></SideNavbar>
          </div>
          {/* <SearchBarSpecific purpose="medicine" /> */}
          <div className="lg:w-[70vw] lg:ml-[25vw] lg:mt-[50px]">
            <div className="relative flex flex-col items-center">
              <Topbar
                title="Order Success"
                leftIcon={<IoIosArrowBack fontSize={'24px'} />}
              ></Topbar>
              <>{children}</>
            </div>
            <Flex justify={'center'} className="pb-[10vh] w-full">
              <Box
                onClick={handleSeeRunningOrders}
                className="w-[96vw] lg:w-[35vw] m-2 bg-[#283b77] text-white font-poppins font-bold text-xl p-3 text-center rounded-md cursor-pointer"
              >
                See Running Orders
              </Box>
            </Flex>
          </div>
        </div>
        {/* <CartButton></CartButton> */}
      </Suspense>
    </>
  );
}
