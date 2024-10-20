import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Flex, Box, Text } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import Link from 'next/link';

type IServiceListProps = {
  children?: ReactNode;
};

type IService = {
  id: number;
  icon: string;
  title: string;
  link: string;
};

const data: IService[] = [
  {
    id: 1,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/pharmacy_coimsv.png',
    title: 'Pharmacy at Home',
    link: '/pharmacy',
  },
  {
    id: 2,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/syringe_nbzsuh.png',
    title: 'Nursing at Home',
    link: '/issue/services/nurses-at-home',
  },
  {
    id: 3,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/syringe_nbzsuh.png',
    title: 'Phisiotherapy at Home',
    link: '/issue/services/phisiotherapy-at-home',
  },
  {
    id: 4,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/syringe_nbzsuh.png',
    title: 'Tests at Home',
    link: '/issue/services/test-investigation-at-home',
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/syringe_nbzsuh.png',
    title: 'Online Consultation',
    link: '/issue/services/online-consultation',
  },
  {
    id: 6,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/syringe_nbzsuh.png',
    title: 'Doctor at Home',
    link: '/issue/services/health-at-home',
  },
];

const ServiceList: React.FC<IServiceListProps> = () => {
  return (
    <Box className="w-full sm:w-1/3 mt-3 animate-slidein">
      <Label className="font-poppins text-xl font-bold">Services</Label>
      <Flex
        justify={'between'}
        className="w-full flex-wrap no-scrollbar justify-between mt-3 gap-y-3"
      >
        {data.map((service) => (
          <Link key={service.link} href={service.link}>
            <Box className="w-fit sm:w-[33vw] " key={service.id}>
              <Flex className="w-[28vw] h-fit flex-col items-center">
                <Image
                  width={150}
                  height={150}
                  className="w-full h-auto rounded-lg p-5 bg-[#283891]"
                  alt="service"
                  src={service.icon}
                />
                <Flex
                  justify={'center'}
                  className="w-full justify-center mt-2 font-bold"
                >
                  <Text
                    as="p"
                    className="text-black text-base font-poppins text-center"
                  >
                    {service.title}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};
export default ServiceList;
