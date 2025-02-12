import OrderItemList from '@/components/OrderItemList';
import SelectAreaOrder from '@/components/SelectAreaOrder';
import React from 'react';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <div className="p-[2vw] lg:p-0 relative w-full">
      <div className="w-full lg:w-1/2">
        <p className="font-poppins text-xl font-bold">Order Details</p>
        <OrderItemList></OrderItemList>
        <SelectAreaOrder></SelectAreaOrder>
      </div>
    </div>
  );
};
export default page;
