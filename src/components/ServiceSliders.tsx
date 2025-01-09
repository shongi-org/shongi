import React from 'react';
import ServiceSlider from './ServiceSlider';
import { Box } from '@radix-ui/themes';

type ServiceSlidersProps = object;

type IService = {
  id: number;
  title: string;
  serviceSlug: string;
};

const data: IService[] = [
  {
    id: 1,
    title: 'Pharmacy at Home',
    serviceSlug: 'pharmacy',
  },
  {
    id: 2,
    title: 'Nursing at Home',
    serviceSlug: 'nurses-at-home',
  },
  {
    id: 3,
    title: 'Phisiotherapy at Home',
    serviceSlug: 'phisiotherapy-at-home',
  },
  {
    id: 4,
    title: 'Tests at Home',
    serviceSlug: 'test-investigation-at-home',
  },
  {
    id: 5,
    title: 'Online Consultation',
    serviceSlug: 'online-consultation',
  },
  {
    id: 6,
    title: 'Doctor at Home',
    serviceSlug: 'doctor-at-home',
  },
];

const ServiceSliders: React.FC<ServiceSlidersProps> = () => {
  return (
    <Box className="mb-[10vh] w-full">
      {data.map((service) => (
        <div key={service.id} className="mt-4">
          <div className="flex justify-between">
            <p className="font-poppins no-scrollbar font-bold text-xl">
              {service.title}
            </p>
            <p className="font-poppins font-semibold text-danger text-2xl ">
              See More
            </p>
          </div>

          <ServiceSlider serviceSlug={service.serviceSlug}></ServiceSlider>
        </div>
      ))}
    </Box>
  );
};
export default ServiceSliders;
