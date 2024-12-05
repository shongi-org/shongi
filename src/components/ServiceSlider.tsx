import { Box, Button, Flex, Text } from '@radix-ui/themes';
import React from 'react';
import * as subServiceList from '@/data/service.json';
// import { ISubservice } from '@/interfaces/ISubservice';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';

type ServiceSliderProps = {
  serviceSlug: string;
};

const ServiceSlider: React.FC<ServiceSliderProps> = ({ serviceSlug }) => {
  const data: { [key: string]: { [key: string]: string | number }[] } =
    subServiceList;

  return (
    <Flex
      justify={'center'}
      align={'center'}
      className="w-[95vw] overflow-scroll no-scrollbar mt-3 h-full"
    >
      {data[serviceSlug] &&
        data[serviceSlug].map((service: { [key: string]: string | number }) => (
          <Box
            className="w-[45vw] sm:w-[33vw] mr-3 mt-3 drop-shadow-lg"
            key={service.id}
          >
            <Link href={`/issue?sub-service=${service.id}`}>
              <Flex
                direction={'column'}
                className="w-[45vw] h-fit justify-start items-end relative"
              >
                <Image
                  width={200}
                  height={200}
                  className="w-[45vw] h-auto rounded-lg"
                  alt="service"
                  src={service.image as string}
                />
                <Flex
                  justify={'between'}
                  className="flex w-[45vw] pb-6 text-start justify-between items-center mt-3 pl-2 pr-2"
                >
                  <Text
                    as="p"
                    weight={'bold'}
                    className="text-black text-md font-poppins w-2/3"
                  >
                    {service.subserviceName}
                  </Text>
                  <Button className="w-1/3 rounded-full">+</Button>
                </Flex>
              </Flex>
            </Link>
          </Box>
        ))}
      <Flex
        justify={'center'}
        align={'center'}
        className="w-[45vw] sm:w-[33vw] mr-3 mt-3 drop-shadow-lg h-full"
      >
        <Link href={(serviceSlug || '') as Url}>
          <Flex
            direction={'column'}
            className="w-[45vw] h-full justify-center items-center relative"
          >
            <p className="font-poppins font-semibold text-danger text-2xl">
              See More
            </p>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};
export default ServiceSlider;
