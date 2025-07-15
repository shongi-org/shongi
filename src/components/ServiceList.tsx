'use client';
import React, { ReactNode, useEffect, useState } from 'react';
// import Image from 'next/image';
import { Flex, Box, Text } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import Link from 'next/link';
import { config } from '@/config';
import Skeleton from './Skeleton';
import { useTranslation } from '@/hooks/useTranslation';

type IServiceListProps = {
  data?: ReactNode;
};

type IService = {
  _id: number;
  icon: string;
  name: string;
  decription: string;
  price?: string;
  children?: IService[];
  duration: number;
};

const ServiceList: React.FC<IServiceListProps> = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch(`${config.backendURL}/api/services`);
        const data = await response.json();

        setServices(data);
        setLoading(false);
      } catch (error) {
        setError(error as string);
      }
    }
    fetchServices();
  }, []);
  const { t } = useTranslation();

  return (
    <Box className="w-full sm:w-1/3 lg:w-[70vw] mt-3">
      <Label className="font-poppins text-4xl font-bold">
        {services.length > 0 && t('navbar.services')}
      </Label>
      <Flex
        justify={'between'}
        className="w-full flex-wrap no-scrollbar justify-between mt-3 gap-y-3"
      >
        {loading &&
          new Array(6)
            .fill(0)
            .map((item) => (
              <Skeleton
                key={item}
                className="w-[30vw] lg:w-[11vw] h-[30vw] lg:h-[11vw]"
              />
            ))}
        {error && (
          <>
            <p>Server Error please try again</p>
          </>
        )}
        {services?.map((service: IService) => (
          <Link
            key={service._id}
            href={`${(service.children as IService[])?.length > 0 ? `/choose-service` : `/create-patient?service_id=${service._id}&service_name=${service.name}&price=${service.price}&duration=${service.duration}`}`}
          >
            <Box className="w-fit sm:w-[48vw] lg:w-[17vw]" key={service._id}>
              <Flex
                justify={'center'}
                className="w-[45vw] lg:w-full h-fit flex-col items-center justify-center"
              >
                {/* <Image
                  width={150}
                  height={150}
                  className="w-full h-auto rounded-2xl p-3 bg-white border-solid border-4 border-[#283891]"
                  alt="service"
                  src={service.icon}
                /> */}
                <Flex
                  justify={'center'}
                  align={'center'}
                  className="w-full lg:h-[11vw] h-[30vw] text-4xl lg:text-8xl text-center m-0 auto align-middle font-bold border-solid border-4 border-[#283891] text-indigo-900 rounded-2xl"
                >
                  <p>{service.icon}</p>
                </Flex>
                <Flex
                  justify={'center'}
                  className="w-full justify-center mt-2 font-bold"
                >
                  <Text
                    as="p"
                    className="text-black lg:text-2xl text-xl font-poppins text-center"
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
