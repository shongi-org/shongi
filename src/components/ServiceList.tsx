import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Flex, Box, Text } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';

type IServiceListProps = {
  children?: ReactNode;
};

type IService = {
  id: number;
  icon: string;
  title: string;
};

const data: IService[] = [
  {
    id: 1,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/pharmacy_coimsv.png',
    title: 'Pharmacy at Home',
  },
  {
    id: 2,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/syringe_nbzsuh.png',
    title: 'Nursing at Home',
  },
  {
    id: 3,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/syringe_nbzsuh.png',
    title: 'Phisiotherapy at Home',
  },
  {
    id: 4,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/syringe_nbzsuh.png',
    title: 'Tests at Home',
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/syringe_nbzsuh.png',
    title: 'Online Consultation',
  },
  {
    id: 6,
    icon: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729066462/syringe_nbzsuh.png',
    title: 'Doctor at Home',
  },
];

const ServiceList: React.FC<IServiceListProps> = () => {
  return (
    <Box className="w-full sm:w-1/3 mt-3">
      <Label className="font-poppins text-xl font-bold">Services</Label>
      <Flex
        justify={'between'}
        className="w-full flex-wrap no-scrollbar justify-between mt-3 gap-y-3"
      >
        {data.map((service) => (
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
        ))}
      </Flex>
    </Box>
  );
};
export default ServiceList;
