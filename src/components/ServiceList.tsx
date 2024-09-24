import React from "react";
import Image from "next/image";
import { Flex, Box, Container, Card, Avatar, Text } from "@radix-ui/themes";
import { Label } from "@radix-ui/react-label";

type IServiceListProps = {};

type IService = {
  id: number;
  icon: string;
  title: string;
};

const data: IService[] = [
  {
    id: 1,
    icon: "https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988860/infinimed/pharmacy_ehjroy.jpg",
    title: "Pharmacy",
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988853/infinimed/nursing_eg5lqj.jpg",
    title: "Nursing",
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988852/infinimed/phisiotherapist_tfsxlh.jpg",
    title: "Phisiotherapy",
  },
  {
    id: 4,
    icon: "https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988860/infinimed/pharmacy_ehjroy.jpg",
    title: "Pharmacy",
  },
  {
    id: 5,
    icon: "https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988853/infinimed/nursing_eg5lqj.jpg",
    title: "Nursing",
  },
  {
    id: 6,
    icon: "https://res.cloudinary.com/dsuiwxwkg/image/upload/v1726988852/infinimed/phisiotherapist_tfsxlh.jpg",
    title: "Phisiotherapy",
  },
];

const ServiceList: React.FC<IServiceListProps> = () => {
  return (
    <Box className="w-full sm:w-1/3 mt-3">
      <Label className="font-poppins">Services</Label>
      <Flex className="w-[95vw] overflow-scroll no-scrollbar mt-3">
        {data.map((service) => (
          <Box className="w-fit sm:w-[33vw] mr-3 " key={service.id}>
            <Flex className="w-[27vw] h-fit flex-col items-center">
              <Image
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
                alt="service"
                src={service.icon}
              />
              <Flex justify={"center"} className="w-full justify-center">
                <Text as="p" className="text-black text-sm font-poppins">
                  {service.title}
                </Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default ServiceList;
