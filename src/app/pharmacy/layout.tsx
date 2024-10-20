import Topbar from '@/components/Topbar';
import { Box, Flex } from '@radix-ui/themes';
import { ReactNode } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen flex flex-col items-center ">
      <Topbar
        title="Pharmacy"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      ></Topbar>
      <>{children}</>
      <Box className="absolute bottom-0 mb-2">
        <Flex
          justify={'center'}
          className="w-[96vw] bg-primary flex text-white font-poppins font-medium p-3 text-xl rounded-md "
        >
          <p className="w-1/2 text-end pr-2">Cart</p>
          <p>|</p>
          <p className="w-1/2 text-start pl-2">50Tk</p>
        </Flex>
      </Box>
    </div>
  );
}
