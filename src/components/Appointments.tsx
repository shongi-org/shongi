import React from 'react';
import { Flex, Box, Text } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import { dayToString } from '@/utils/datehandler';
import { format } from 'date-fns';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type IAppointmentsProps = {};

type IAppointment = {
  id: number;
  service: string;
  date: Date;
  providerName: string;
  link: string;
};

const data: IAppointment[] = [
  {
    id: 1,
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
    link: '/issue',
  },
  {
    id: 2,
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
    link: '/issue',
  },
  {
    id: 3,
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
    link: '/issue',
  },
  {
    id: 4,
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
    link: '/issue',
  },
  {
    id: 5,
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
    link: '/issue',
  },
  {
    id: 6,
    service: 'Phisiotherapy',
    date: new Date(),
    providerName: 'John Doe',
    link: '/issue',
  },
];

const Appointments: React.FC<IAppointmentsProps> = () => {
  return (
    <Box className="w-full sm:w-1/3 mt-3">
      <Label className="font-poppins text-xl font-bold">
        Upcoming Appointments
      </Label>
      <Flex
        direction={'column'}
        className="w-full h-[40vh] overflow-scroll no-scrollbar mt-3 text-white "
      >
        {data.map((service) => (
          <Box
            className="w-full sm:w-[33vw] p-2 bg-rose-200 border-2 mb-2 rounded-xl shadow-md"
            key={service.id}
          >
            <Link href={service.link}>
              <Flex className="w-full h-fit items-center">
                <Flex
                  direction={'column'}
                  align={'center'}
                  className="border-white border-2 p-3 rounded-md"
                >
                  <Text
                    as="p"
                    className="text-white text-xl font-bold font-poppins"
                  >
                    {service.date.getDate()}
                  </Text>
                  <Text as="p" className="text-white text-sm font-poppins">
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
                    className=" text-sm font-poppins pl-2 pr-2 rounded-full bg-white text-[#b03b47] font-bold"
                  >
                    {format(service.date, 'HH:mm')}
                  </Text>
                  <Text
                    as="p"
                    className="text-white text-sm font-poppins font-bold"
                  >
                    {service.providerName}
                  </Text>
                  <Text as="p" className="text-white text-sm font-poppins">
                    {service.service}
                  </Text>
                </Flex>
              </Flex>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default Appointments;
