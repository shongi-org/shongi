'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { IMedicine } from '@/interfaces/IMedicine';
import { Box, Flex } from '@radix-ui/themes';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const pathname = usePathname();
  const data: IMedicine = {
    id: 1,
    generic: 'paracetamol',
    dosage: '20mg tablet',
    image:
      'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png',
    price: 40,
    brand: 'Square',
    marketName: 'Napa',
    description: 'lorem ipsum',
    discountedPrice: 0,
  };

  return (
    <>
      <div className="relative flex flex-col items-center">
        <Flex
          justify={'between'}
          align={'center'}
          className="absolute bottom-[-7.5vh] bg-slate-300 w-[80vw] h-[15vh] rounded-full p-5"
        >
          <Flex direction={'column'}>
            <p className="font-poppins font-bold text-xl">
              {data.generic.toUpperCase()}
            </p>
            <p className="font-poppins font-bold">{data.marketName}</p>
            <p className="font-poppins">{data.brand.toUpperCase()}</p>
          </Flex>
          <Flex direction={'column'} align={'center'}>
            <p
              className={`${data.discountedPrice ? 'line-through text-xl' : 'text-2xl'} font-poppins`}
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
          className="w-full p-2"
        />
      </div>
      <Box className="pt-[10vh] pl-[5vw] pr-[5vw] bg-slate-600 h-[60vh]">
        <p className="text-white font-bold font-poppins">Dosage </p>
        <p className="text-white font-poppins">{data.dosage}</p>
        <p className="text-white font-bold font-poppins">Description</p>
        <p className="text-white font-poppins">{data.description}</p>
      </Box>
      <Flex></Flex>
    </>
  );
};
export default page;
