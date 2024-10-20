import Topbar from '@/components/Topbar';
import { Box } from '@radix-ui/themes';
import { ReactNode } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen flex flex-col items-center">
      <Topbar
        title="Paracetamol"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      ></Topbar>
      <>{children}</>
      <Box className="absolute bottom-0 mb-2">
        <Box className="w-[96vw] bg-white text-primary border-solid border-2 border-primary font-poppins font-bold text-xl p-3 text-center rounded-md mb-2">
          Add to Cart
        </Box>
        <Box className="w-[96vw] bg-primary text-white font-poppins font-bold text-xl p-3 text-center rounded-md ">
          Place Order
        </Box>
      </Box>
    </div>
  );
}
