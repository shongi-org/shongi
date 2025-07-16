import OrderItemList from '@/components/OrderItemList';
import SelectAreaOrder from '@/components/SelectAreaOrder';
import { Box } from '@radix-ui/themes';
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

type pageProps = object;

const { t } = useTranslation();

const page: React.FC<pageProps> = () => {
  
  return (
    <div className="p-[2vw] relative h-screen">
      <div>
        <p className="font-poppins text-3xl font-bold">Order Details</p>
        <OrderItemList></OrderItemList>
        <SelectAreaOrder></SelectAreaOrder>
      </div>
      <Box className="w-[96vw] bg-cyan-700 text-white font-poppins font-bold text-xl p-3 text-center rounded-md absolute bottom-0 mb-2">
        {t('cart.placeOrder')}
      </Box>
    </div>
  );
};
export default page;
