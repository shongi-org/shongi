import React from 'react';
import Image from 'next/image';
import { Flex, Box, Container, Card, Avatar, Text } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import { dayToString } from '@/utils/datehandler';
import { format } from 'date-fns';
import { formatDate } from 'date-fns';

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
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
  },
  {
    id: 2,
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
  },
  {
    id: 3,
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
  },
  {
    id: 4,
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
  },
  {
    id: 5,
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
  },
  {
    id: 6,
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
  },
];

const Appointments: React.FC<IAppointmentsProps> = () => {
  return (
    <Box className="w-full sm:w-1/3 mt-3">
      <Label className="font-poppins">Upcoming Appointments</Label>
      <Flex
        direction={'column'}
        className="w-[94vw] h-[40vh] overflow-scroll no-scrollbar mt-3 p-2 text-white"
      >
        {data.map((service) => (
          <Box
            className="w-full sm:w-[33vw] p-3 border-cyan-700 border-2 mb-2 rounded-xl"
            key={service.id}
          >
            <Flex className="w-full h-fit items-center">
              <Flex
                direction={'column'}
                align={'center'}
                className="border-cyan-700 border-2 p-3 rounded-md"
              >
                <Text
                  as="p"
                  className="text-black text-xl font-bold font-poppins"
                >
                  {service.date.getDate()}
                </Text>
                <Text as="p" className="text-black text-sm font-poppins">
                  {dayToString[service.date.getDay() as number]}
                </Text>
              </Flex>
              <Flex
                align={'start'}
                direction={'column'}
                className="w-full justify-center pl-5"
              >
                <Text
                  as="p"
                  className=" text-sm font-poppins pl-2 pr-2 rounded-full bg-cyan-700 text-white"
                >
                  {format(service.date, 'HH:mm')}
                </Text>
                <Text
                  as="p"
                  className="text-black text-sm font-poppins font-bold"
                >
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
