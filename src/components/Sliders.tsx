import React from 'react';
import ServiceSlider from './ServiceSlider';
import { Box } from '@radix-ui/themes';
// import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/types/translation-keys';

type ServiceSlidersProps = object;


type IService = {
  id: string;
  title: TranslationKey;
  serviceSlug: string;
};

const data: IService[] = [
  {
    id: '1',
    title: 'navbar.testimonials',
    serviceSlug: 'testimonials',
  },
  {
    id: '2',
    title: 'navbar.faqs',
    serviceSlug: 'faq',
  },
];


const Sliders: React.FC<ServiceSlidersProps> = () => {
  const { t } = useTranslation();
  return (
    <Box className=" w-full">
      {data.map((service) => (
        <div key={service.id} className="mt-4">
          <div className="flex justify-between items-center">
            <p className="font-poppins no-scrollbar font-bold text-4xl mr-5">
              {t(service.title)}
            </p>
            {/* <Link
              href={`/issue/services/${service.title.split(' ').join('-')}?_id=${service.id}`}
            > */}
            <p className="font-poppins font-semibold text-red-700 text-2xl cursor-pointer">
              See More
            </p>
            {/* </Link> */}
          </div>

          <ServiceSlider serviceSlug={service.serviceSlug}></ServiceSlider>
        </div>
      ))}
    </Box>
  );
};
export default Sliders;
