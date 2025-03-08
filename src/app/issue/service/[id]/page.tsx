import React from 'react';
import Image from 'next/image';
import { Box, Flex } from '@radix-ui/themes';
import SimilarItems from '@/components/SimilarItems';
import { config } from '@/config';
import Topbar from '@/components/Topbar';
import { IoIosArrowBack } from 'react-icons/io';
import ScheduleButton from '../components/ScheduleButton';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const slug = (await params).id;
  const res = await fetch(`${config.backendURL}/api/service/single/${slug}`);
  const data = await res.json();

  return (
    <>
      <Topbar
        title={` ${data.sub_category.name} ${data.name}`}
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      />
      <div className="w-full h-fit overflow-y-scroll no-scrollbar">
        <div className="relative flex flex-col lg:flex-row w-full lg:w-[70vw] items-center justify-evenly lg:h-fit">
          <Image
            width={300}
            height={300}
            src={data.banner_image}
            alt="medicine-picture"
            className="w-full lg:w-[25vw] p-2 lg:h-auto bg-indigo-900 lg:mt-10"
          />
          <Flex
            justify={'between'}
            align={'center'}
            direction={'column'}
            className="absolute lg:relative bottom-[-7.5vh] text-white  bg-indigo-900 w-[80vw] lg:w-[30vw] h-fit rounded-full p-6 shadow-lg z-10 lg:z-0"
          >
            <Flex direction={'column'} className="w-full">
              <p className="font-poppins font-bold text-lg lg:text-xl text-center">
                {data.name} | {data.sub_category.name} |{' '}
                {data.sub_category.category_id.name}
              </p>
              {/* <p className="font-poppins font-bold"></p>
              <p className="font-poppins">{data.brand?.toUpperCase()}</p> */}
            </Flex>
            <Flex direction={'column'} align={'center'} className="">
              <p
                className={`${data.discountedPrice ? 'line-through text-xl' : 'lg:text-2xl text-2xl'} font-poppins font-bold`}
              >
                Tk. {data?.price}
              </p>

              <p className="text-2xl font-poppins">
                {' '}
                {(data.discountedPrice as number) > 0 &&
                  `Tk. ${data?.discountedPrice}`}
              </p>
            </Flex>
          </Flex>
        </div>
        <Box className="pt-[10vh] pl-[5vw] pr-[5vw] bg-white h-[60vh] w-full">
          <p className="text-black font-poppins mt-3">{data?.dosage}</p>
          <p className="text-black font-bold font-poppins text-xl mt-6">
            Description
          </p>
          <p className="text-black font-poppins mt-3">{data?.description}</p>
        </Box>
        <div className="lg:w-[70vw]">
          <SimilarItems serviceSlug="online-consultation"></SimilarItems>
        </div>
        <ScheduleButton service={data} />
      </div>
    </>
  );
};
export default Page;
