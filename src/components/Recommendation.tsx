import React from "react";
import Image from "next/image";
import { Flex, Box, Container, Card, Avatar, Text } from "@radix-ui/themes";
import { Label } from "@radix-ui/react-label";

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
      "https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988860/infinimed/pharmacy_ehjroy.jpg",
    title: "Pharmacy",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988853/infinimed/nursing_eg5lqj.jpg",
    title: "Nursing",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988852/infinimed/phisiotherapist_tfsxlh.jpg",
    title: "Phisiotherapy",
  },
];

const Recommendation: React.FC<RecommendationProps> = () => {
  return (
    <Box className="w-full sm:w-1/3 mt-3">
      <Label className="font-poppins">Recommended For you</Label>
      <Flex className="w-[95vw] overflow-scroll no-scrollbar mt-3">
        {data.map((service) => (
          <Box
            className="w-[90vw] sm:w-[33vw] mr-3 shadow-2xl"
            key={service.id}
          >
            <Flex className="w-[90vw] h-fit justify-start items-end relative">
              <Flex className="flex absolute w-[90vw] pl-4 pb-6 text-start justify-start items-center ">
                <Text
                  as="p"
                  weight="bold"
                  className="text-white  text-4xl font-poppins"
                >
                  {service.title}
                </Text>
              </Flex>

              <Image
                width={200}
                height={200}
                className="w-[90vw] h-auto rounded-lg "
                alt="service"
                src={service.image}
              />
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default Recommendation;
