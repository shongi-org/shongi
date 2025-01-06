'use client';
import Topbar from '@/components/Topbar';
import { Box } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  // const [orderSuccessful, setOrderSuccessful] = useState<string>('');
  function handleOrderMore() {
    router.push('/');
  }

  return (
    <>
      <div className="relative flex flex-col items-center">
        <Topbar
          title="Order Success"
          leftIcon={<IoIosArrowBack fontSize={'24px'} />}
        ></Topbar>
        <>{children}</>
      </div>
      <Box className="pb-[10vh]">
        <Box
          onClick={handleOrderMore}
          className="w-[96vw] m-2 bg-[#283b77] text-white font-poppins font-bold text-xl p-3 text-center rounded-md "
        >
          See Running Orders
        </Box>
      </Box>
    </>
  );
}
