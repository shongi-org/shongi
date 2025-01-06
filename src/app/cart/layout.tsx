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

  // const [orderSuccessful, setOrderSuccessful] = useState<string>('');
  const cart = useAppSelector((state) => state.addToCart);
  const area = useAppSelector((state) => state.area);
  console.log(area);
  function handleOrderMore() {
    router.push('/');
  }
  async function handlePlaceOrder() {
    const processedOrderItems = changeOrderFormat(cart, {
      detail: area.detail,
      lat: area.geocode.lat,
      long: area.geocode.long,
    });
    const response = await createOrder(processedOrderItems);
    const order = await response.json();
    router.push(`/order-success?order_id = ${order._id}`);
  }
  return (
    <>
      <div className="relative flex flex-col items-center">
        <Topbar
          title="Cart"
          leftIcon={<IoIosArrowBack fontSize={'24px'} />}
        ></Topbar>
        <>{children}</>
      </div>
      <Box className="pb-[10vh]">
        <Box
          onClick={() => router.push('add-area')}
          className="w-[96vw] m-2 bg-white text-[#283b77] border-solid border-2 border-[#283b77] font-poppins font-bold text-xl p-3 text-center rounded-md mb-2"
        >
          Change Area
        </Box>
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
