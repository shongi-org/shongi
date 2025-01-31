'use client';
import { Box } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  // const [orderSuccessful, setOrderSuccessful] = useState<string>('');
  function handleOrderMore() {
    router.push('/');
  }

  return (
    <>
      <div className=" ">
        {/* <SearchBarSpecific purpose="medicine" /> */}

        <div className="relative flex flex-col items-center">
          <>{children}</>
        </div>
        <Box className="pb-[10vh]">
          <Box
            onClick={handleOrderMore}
            className="w-[96vw] lg:w-[70vw] m-2 bg-red-900 text-white font-poppins font-bold text-xl p-3 text-center rounded-md cursor-pointer"
          >
            Cancel Order
          </Box>
        </Box>
      </div>
    </>
  );
}
