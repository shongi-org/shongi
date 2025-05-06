'use client';

import React, { useEffect, useState } from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import Image from 'next/image';
import { config } from '@/config';
import { ISubservice } from '@/interfaces/ISubservice';
import { useSearchParams } from 'next/navigation';
// import SearchBar from '@/components/SearchBar';
import { useAppSelector } from '@/lib/hooks';
import { Label } from '@radix-ui/react-label';
// import { ISearchResult } from '@/interfaces/ISearchResult';
// import SearchBarSpecific from '@/components/SearchBarSpecific';

const WhyChooseUs: React.FC = () => {
  const searchParams = useSearchParams();
  const category_id = searchParams.get('_id');

  const searchResults = useAppSelector((state) => state.searchResults);

  const [options, setOptions] = useState([
    {
      value: '',
      label: '',
      banner_image: '',
    },
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch(
          `${config.backendURL}/api/services/why-choose-us`,
        );
        const data = await response.json();

        const mappedOptions = data.whyChooseUs.map(
          (subCategory: ISubservice) => ({
            label: subCategory.name,
            value: subCategory._id,
            banner_image: subCategory.banner_image,
          }),
        );

        setOptions(mappedOptions);
        setLoading(false);
      } catch (error) {
        setError(error as string);
        setLoading(false);
      }
    }
    fetchServices();
  }, [category_id]);

  return (
    <Box className="mt-3">
      <Label className="font-poppins text-4xl font-bold">
        {options.length > 0 && 'Why Choose Us'}
      </Label>
      <Flex
        wrap={'wrap'}
        align={'start'}
        justify={'between'}
        className="lg:min-h-fit lg:w-[70vw] w-full  lg:pl-0  pr-4 lg:pr-0 "
      >
        {error && <p>Faced a server error. Please refresh</p>}
        {loading && <p>Fetching Services</p>}
        {options.length === 0 && !loading && (
          <p>
            This category has no service under it yet. IM Health is working on
            it.
          </p>
        )}
        {(searchResults.length > 0
          ? searchResults.map((item: ISubservice) => ({
              label: item.name,
              value: item._id,
              banner_image: item.banner_image,
            }))
          : options
        ).map((option) => (
          <Box
            className={`w-[95vw] lg:w-[23vw] sm:w-fit mr-3 lg:mr-0 mt-3`}
            key={option.value}
          >
            <Link
              href={`/issue/services/sub-category?sub_category_id=${option.value}`}
            >
              <Flex className="w-[95vw] lg:w-full h-fit justify-start items-end relative">
                <Flex className="flex absolute w-[95vw] lg:w-full pl-2 pb-6 text-start justify-start items-center ml-[2.5vw] lg:ml-0 lg:mr-5">
                  <Text
                    as="p"
                    weight="bold"
                    className="text-white text-4xl font-poppins z-10 w-[95vw] text-wrap"
                  >
                    {option.label}
                  </Text>
                </Flex>

                <Image
                  width={200}
                  height={200}
                  className="w-[95vw] lg:w-full h-auto rounded-lg brightness-100 lg:ml-0 lg:mr-5"
                  alt="service"
                  src={option.banner_image as string}
                />
              </Flex>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default WhyChooseUs;
