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
import SearchBar from '@/components/SearchBar';
// import SearchBarSpecific from '@/components/SearchBarSpecific';

const RadioButtonList: React.FC = () => {
  const searchParams = useSearchParams();
  const category_id = searchParams.get('_id');

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
        `${config.backendURL}/api/service/sub-category/${category_id}`,
      );
      const data = await response.json();
      const mappedOptions = data.subCategories.map(
        (subCategory: ISubservice) => ({
          label: subCategory.name,
          value: subCategory._id,
          banner_image: subCategory.banner_image,
        }),
      );
      setOptions(mappedOptions);
    }
    fetchServices();
  }, [category_id]);

  return (
    <>
      <Topbar
        title="Services"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      />
      <SearchBar
        visibility={true}
        // purpose={`service category_id=${category_id}`}
      />
      <Flex
        wrap={'wrap'}
        align={'center'}
        justify={'center'}
        className="min-h-screen lg:min-h-[50vh] lg:w-[70vw] w-full p-4 pb-[8vh]"
      >
        {options.map((option) => (
          <Box
            // onClick={() => handleValueChange(option)}
            className="w-[95vw] lg:w-1/3 sm:w-[33vw] mr-3 lg:mr-0 mt-3"
            key={option.value}
          >
            <Link
              href={`/issue/services/sub-category?sub_category_id=${option.value}`}
            >
              <Flex className="w-[95vw] lg:w-full h-fit justify-start items-end relative">
                <Flex className="flex absolute w-[95vw] lg:w-full pl-4 pb-6 text-start justify-start items-center ml-[2.5vw]">
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
                  className="w-[95vw] lg:w-full h-auto rounded-lg brightness-50 ml-[2.5vw]"
                  alt="service"
                  src={option.banner_image}
                />
              </Flex>
            </Link>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default RadioButtonList;
