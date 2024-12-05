'use client';

import Topbar from '@/components/Topbar';
import { IoIosArrowBack } from 'react-icons/io';
import React, { useEffect, useState } from 'react';

import { Box, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import Image from 'next/image';
import { config } from '@/config';
import { ISubservice } from '@/interfaces/ISubservice';
import { useSearchParams } from 'next/navigation';

const RadioButtonList: React.FC = () => {
  const searchParams = useSearchParams();

  const sub_category_id = searchParams.get('sub_category_id');

  const [options, setOptions] = useState([
    {
      value: '',
      label: '',
      banner_image: '',
    },
  ]);

  useEffect(() => {
    async function fetchServices() {
      const response = await fetch(
        `${config.backendURL}/api/service/${sub_category_id}`,
      );
      const data = await response.json();
      const mappedOptions = data.services.map((service: ISubservice) => ({
        label: service.name,
        value: service._id,
        banner_image: service.banner_image,
      }));
      setOptions(mappedOptions);
    }
    fetchServices();
  }, [sub_category_id]);

  return (
    <>
      <Topbar
        title="Services"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full p-4 mb-[8vh]">
          {options.map((option) => (
            <Box
              // onClick={() => handleValueChange(option)}
              className="w-[95vw] sm:w-[33vw] mr-3 mt-3 "
              key={option.value}
            >
              <Link
                href={`/issue?service_id=${option.value}&service_name=${option.label}`}
              >
                <Flex className="w-[95vw] h-fit justify-start items-end relative">
                  <Flex className="flex absolute w-[95vw] pl-4 pb-6 text-start justify-start items-center ">
                    <Text
                      as="p"
                      weight="bold"
                      className="text-white text-4xl font-poppins z-10"
                    >
                      {option.label}
                    </Text>
                  </Flex>

                  <Image
                    width={200}
                    height={200}
                    className="w-[93vw] h-auto rounded-lg brightness-50"
                    alt="service"
                    src={option.banner_image}
                  />
                </Flex>
              </Link>
            </Box>
          ))}
        </div>
      </div>
    </>
  );
};

export default RadioButtonList;
