'use client';
import { IServiceDetails } from '@/interfaces/IService';
// import { addToCart } from '@/lib/features/cart/addToCart';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Box } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

type ScheduleButtonProps = {
  service: IServiceDetails;
};

const ScheduleButton: React.FC<ScheduleButtonProps> = ({ service }) => {
  const { t } = useTranslation();
  
  return (
    <div className="fixed bottom-[9vh] w-[96vw] lg:w-[30vw] ml-[2vw] lg:ml-[20vw]">
      <Link
        href={`/issue?service_id=${service._id}&service_name=${service.name}%20${service.sub_category.name}%20${service.sub_category.category_id.name}&price=${service.price}`}
      >
        <Box className="bg-white text-primary border-solid border-2 border-primary font-poppins font-bold text-xl p-3 text-center rounded-md mb-2 cursor-pointer">
          {t('appointment.schedule')}
        </Box>
      </Link>
    </div>
  );
};
export default ScheduleButton;
