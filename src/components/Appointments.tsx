import React from "react";
import Image from "next/image";
import { Flex, Box, Container, Card, Avatar, Text } from "@radix-ui/themes";
import { Label } from "@radix-ui/react-label";

type IAppointmentsProps = {};

type IAppointment = {
  id: number;
  service: string;
  date: Date;
  providerName: string;
};

const data: IAppointment[] = [
  {
    id: 1,
    service: "Phisiotherapy",
    date: new Date(),
    providerName: "John Doe",
  },
  {
    id: 2,
    service: "Phisiotherapy",
    date: new Date(),
    providerName: "John Doe",
  },
  {
    id: 3,
    service: "Phisiotherapy",
    date: new Date(),
    providerName: "John Doe",
  },
  {
    id: 4,
    service: "Phisiotherapy",
    date: new Date(),
    providerName: "John Doe",
  },
  {
    id: 5,
    service: "Phisiotherapy",
    date: new Date(),
    providerName: "John Doe",
  },
  {
    id: 6,
    service: "Phisiotherapy",
    date: new Date(),
    providerName: "John Doe",
  },
];

const Appointments: React.FC<IAppointmentsProps> = () => {
  return (
    <Box className="w-full sm:w-1/3 mt-3">
      <Label className="font-poppins">Upcoming Appointments</Label>
      <Flex
        direction={"column"}
        className="w-[94vw] h-[30vh] overflow-scroll no-scrollbar mt-3 shadow-inner "
      >
        {data.map((service) => (
          <Box
            className="w-full sm:w-[33vw] p-3 border-cyan-700 border-2 mb-2 rounded-xl"
            key={service.id}
          >
            <Flex className="w-full h-fit items-center">
              <Flex direction={"column"}>
                <Text as="p" className="text-black text-sm font-poppins">
                  {service.date.getDate()}
                </Text>
                <Text as="p" className="text-black text-sm font-poppins">
                  {service.date.getDay()}
                </Text>
              </Flex>
              <Flex
                align={"center"}
                direction={"column"}
                className="w-full justify-center"
              >
                <Text as="p" className="text-black text-sm font-poppins">
                  {service.date.getTime()}
                </Text>
                <Text as="p" className="text-black text-sm font-poppins">
                  {service.providerName}
                </Text>
                <Text as="p" className="text-black text-sm font-poppins">
                  {service.service}
                </Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default Appointments;
