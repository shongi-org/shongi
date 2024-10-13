'use client';
import React from 'react';
import Image from 'next/image';
import { Flex, Box, Text } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
// import { Carousel } from 'flowbite-react';
//@ts-expect-error no type declaration
// import Slider from 'react-infinite-logo-slider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Carousel from 'react-multi-carousel';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type RecommendationProps = {};

type IRecommendation = {
  id: number;
  image: string;
  title: string;
};

const data = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988860/infinimed/pharmacy_ehjroy.jpg',
    title: 'Pharmacy',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988853/infinimed/nursing_eg5lqj.jpg',
    title: 'Nursing',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988852/infinimed/phisiotherapist_tfsxlh.jpg',
    title: 'Phisiotherapy',
  },
];

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 4000,
  cssEase: 'linear',
};

const Recommendation: React.FC<RecommendationProps> = () => {
  return (
    <Box className="w-full sm:w-1/3 mt-3">
      <Label className="font-poppins no-scrollbar">Recommended For you</Label>
      {/* <Flex className="w-[95vw] overflow-scroll no-scrollbar mt-3"> */}
      <Slider {...settings}>
        {data.map((service: IRecommendation) => (
          <Box className="w-[95vw] sm:w-[33vw] mr-3 " key={service.id}>
            <Flex className="w-[95vw] h-fit justify-start items-end relative">
              <Flex className="flex absolute w-[95vw] pl-4 pb-6 text-start justify-start items-center ">
                <Text
                  as="p"
                  weight="bold"
                  className="text-white text-4xl font-poppins"
                >
                  {service.title}
                </Text>
              </Flex>

              <Image
                width={200}
                height={200}
                className="w-[93vw] h-auto rounded-lg "
                alt="service"
                src={service.image}
              />
            </Flex>
          </Box>
        ))}
      </Slider>
      {/* </Flex> */}
    </Box>
  );
};
export default Recommendation;
