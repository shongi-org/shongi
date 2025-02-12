'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import { Flex, Box, Text } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import Link from 'next/link';
import { config } from '@/config';

type IServiceListProps = {
  data?: ReactNode;
};

type IService = {
  _id: number;
  icon: string;
  name: string;
  decription: string;
};

const ServiceList: React.FC<IServiceListProps> = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const response = await fetch(
        `${config.backendURL}/api/service/category/`,
      );
      const data = await response.json();
      setServices(data.serviceCategories);
    }
    fetchServices();
  }, []);
  return (
    <Box className="w-full sm:w-1/3 lg:w-[70vw] mt-3">
      <Label className="font-poppins text-xl font-bold">Services</Label>
      <Flex
        justify={'between'}
        className="w-full flex-wrap no-scrollbar justify-between mt-3 gap-y-3"
      >
        {services?.map((service: IService) => (
          <Link
            key={service._id}
            href={
              service.name.includes('Pharmacy')
                ? '/pharmacy'
                : `/issue/services/${service.name.split(' ').join('-')}?_id=${service._id}`
            }
          >
            <Box className="w-fit sm:w-[33vw] lg:w-[11vw] " key={service._id}>
              <Flex className="w-[28vw] lg:w-full h-fit flex-col items-center">
                <Image
                  width={150}
                  height={150}
                  className="w-full h-auto rounded-2xl p-3 bg-white border-solid border-4 border-[#283891]"
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
                    {service.name}
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
