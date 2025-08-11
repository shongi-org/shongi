import { Box, Flex, Text } from '@radix-ui/themes';
import React from 'react';
import * as subServiceList from '@/data/service.json';
// import { ISubservice } from '@/interfaces/ISubservice';
// import Link from 'next/link';
// import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';

type ServiceSliderProps = {
  serviceSlug: string;
};

type Service = {
  id: number;
  subserviceName: string;
  description?: string;
  image?: string;
  url?: string;
};

type feed = {
  testimonials: Service[];
  faq: Service[];
};

const ServiceSlider: React.FC<ServiceSliderProps> = ({ serviceSlug }) => {
  const data: feed = subServiceList;

  return (
    <Flex
      justify={'start'}
      align={'start'}
      className="overflow-x-scroll no-scrollbar mt-3 h-full"
    >
      {data[serviceSlug as keyof feed] &&
        data[serviceSlug as keyof feed].slice(0, 4).map((service: Service) => (
          <Box
            className=" w-fit sm:w-[33vw] lg:w-[22vw] text-xl mt-3 mr-2 drop-shadow-lg border-solid border-2 rounded border-indigo-900 p-4"
            key={service.id}
          >
            <Flex
              direction={'column'}
              className=" lg:w-full h-fit justify-start items-start relative"
            >
              <Flex>
                {service.image && (
                  <Image
                    width={50}
                    height={50}
                    className="w-[10vw] lg:w-full h-auto rounded-lg"
                    alt="service"
                    src={service.image as string}
                  />
                )}
              </Flex>
              <Flex
                justify={'between'}
                direction={'column'}
                className=" w-[60vw] lg:w-full pb-6 text-start justify-between items-center mt-3 pl-2 pr-2"
              >
                <Text
                  as="p"
                  weight={'bold'}
                  className="text-black text-lg font-poppins w-full"
                >
                  {service.subserviceName}
                </Text>
                <Text
                  as="p"
                  weight={'bold'}
                  className="text-black text-sm font-poppins w-full"
                >
                  {service.description}
                </Text>
                {/* <Button className="w-1/3 rounded-full">+</Button> */}
              </Flex>
            </Flex>
          </Box>
        ))}
      {/* <div className=" w-[45vw] lg:w-fit sm:w-[33vw] mr-3 mt-3 drop-shadow-lg h-full lg:hidden">
        <Link href={(serviceSlug || '') as Url}>
          <Flex
            direction={'column'}
            className="w-[45vw] lg:w-fit h-full justify-center items-center relative"
          >
            <p className="font-poppins font-semibold text-danger text-2xl lg:w-0 ">
              See More
            </p>
          </Flex>
        </Link>
      </div> */}
    </Flex>
  );
};
export default ServiceSlider;
