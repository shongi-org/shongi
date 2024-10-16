import OrderItemList from '@/components/OrderItemList';
import SelectAreaOrder from '@/components/SelectAreaOrder';
import { Box } from '@radix-ui/themes';
import React from 'react';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <div className="p-[2vw] relative h-screen">
      <div>
        <p className="font-poppins text-3xl font-bold">Order Details</p>
        <OrderItemList></OrderItemList>
        <SelectAreaOrder></SelectAreaOrder>
      </div>
      <Box className="absolute bottom-0 mb-2">
        <Box className="w-[96vw] bg-white text-cyan-700 border-solid border-2 border-cyan-700 font-poppins font-bold text-xl p-3 text-center rounded-md mb-2">
          Order more
        </Box>
        <Box className="w-[96vw] bg-cyan-700 text-white font-poppins font-bold text-xl p-3 text-center rounded-md ">
          Place Order
        </Box>
      </Box>
    </div>
  );
};
export default page;
