'use client';
import React from 'react';
import Image from 'next/image';
import { IMedicine } from '@/interfaces/IMedicine';
import { Box, Flex } from '@radix-ui/themes';

type pageProps = object;
const dataTable: IMedicine[] = [
  {
    id: '1',
    generic: { name: 'Paracetamol' },
    dosage: '20mg tablet',
    image:
      'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png',
    price: 40,
    brand: 'Square',
    name: 'Napa',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    discountedPrice: 0,
    type: 'medicine',
  },
];

const Page: React.FC<pageProps> = () => {
  // const pathname = usePathname();

  const data = dataTable[0];
  return (
    <div className="w-full overflow-y-scroll">
      <div className="relative flex flex-col w-full items-center bg-red-200 ">
        <Flex
          justify={'between'}
          align={'center'}
          className="absolute bottom-[-7.5vh] bg-slate-300 w-[80vw] h-[15vh] rounded-full p-8 shadow-lg z-10"
        >
          <Flex direction={'column'}>
            <p className="font-poppins font-bold text-xl">
              {data.generic.name.toUpperCase()}
            </p>
            <p className="font-poppins font-bold">{data.name}</p>
            <p className="font-poppins">{data.brand.toUpperCase()}</p>
          </Flex>
          <Flex direction={'column'} align={'center'} className="">
            <p
              className={`${data.discountedPrice ? 'line-through text-xl' : 'text-2xl'} font-poppins font-bold`}
            >
              Tk. {data.price}
            </p>

            <p className="text-2xl font-poppins">
              {' '}
              {(data.discountedPrice as number) > 0 &&
                `Tk. ${data.discountedPrice}`}
            </p>
          </Flex>
        </Flex>
        <Image
          width={300}
          height={300}
          src={data.image}
          alt="medicine-picture"
          className="w-full p-2 bg-red-200"
        />
      </div>
      <Box className="pt-[10vh] pl-[5vw] pr-[5vw] bg-white  h-[60vh] w-full ">
        <p className="text-black font-bold font-poppins text-xl mt-6">
          Dosage{' '}
        </p>
        <p className="text-black font-poppins mt-3">{data.dosage}</p>
        <p className="text-black font-bold font-poppins text-xl mt-6">
          Description
        </p>
        <p className="text-black font-poppins mt-3">{data.description}</p>
      </Box>
      <Flex></Flex>
    </div>
  );
};
export default Page;
