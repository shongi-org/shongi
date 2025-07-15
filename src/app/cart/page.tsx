'use client';

import React, { Suspense } from 'react';
import AppointmentDetails from './(components)/AppointmentDetails';
import Area from './(components)/Area';
import { useTranslation } from '@/hooks/useTranslation';

type PageProps = object;

const Page: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  
  return (
    <div className="p-[2vw] lg:p-0 relative w-full">
      <div className="w-full lg:w-1/2">
        <p className="font-poppins text-xl font-bold">{t('appointment.details')}</p>
        <Suspense>
          <AppointmentDetails />
          <Area />
        </Suspense>
      </div>
    </div>
  );
};
export default Page;
