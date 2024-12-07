'use client';
import Topbar from '@/components/Topbar';
import { useAppSelector } from '@/lib/hooks';
import { changeOrderFormat } from '@/lib/utils/changeOrderFormat.processing';
import { createOrder } from '@/services/createOrder';
import { Box } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const address = {
    detail: '',
    lat: 0,
    long: 0,
  };
  // const [orderSuccessful, setOrderSuccessful] = useState<string>('');
  const cart = useAppSelector((state) => state.addToCart);
  function handleOrderMore() {
    router.push('/');
  }
  async function handlePlaceOrder() {
    const processedOrderItems = changeOrderFormat(cart, address);
    console.log(processedOrderItems);
    const response = await createOrder(processedOrderItems);
    const order = await response.json();
    console.log(order);
  }
  return (
    <>
      <div className="relative min-h-[75vh] flex flex-col items-center">
        <Topbar
          title="Cart"
          leftIcon={<IoIosArrowBack fontSize={'24px'} />}
        ></Topbar>
        <>{children}</>
      </div>
      <Box className="mb-2">
        <Box
          onClick={handleOrderMore}
          className="w-[96vw] m-2 bg-white text-[#283b77] border-solid border-2 border-[#283b77] font-poppins font-bold text-xl p-3 text-center rounded-md mb-2"
        >
          Order more
        </Box>
        <Box
          onClick={handlePlaceOrder}
          className="w-[96vw] m-2 bg-[#283b77] text-white font-poppins font-bold text-xl p-3 text-center rounded-md "
        >
          Place Order
        </Box>
      </Box>
    </>
  );
}
