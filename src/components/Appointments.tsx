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
    <Box className="w-full sm:w-1/3 mt-3 z-10">
      <Flex justify={'between'}>
        <Label className="font-poppins text-xl font-bold">Appointments</Label>{' '}
        <div className="rounded-full bg-[#283b77] py-0.5 px-2.5 border text-base text-white font-poppins transition-all shadow-lg ">
          Book New
        </div>
      </Flex>

      <Flex gapX={'3'} mt={'3'}>
        {' '}
        <div className="rounded-full bg-[#283b77] py-0.5 px-2.5 border border-transparent text-base text-white font-poppins transition-all shadow-lg ">
          Upcoming
        </div>
        <div className="rounded-full bg-[#ffffff] py-0.5 px-2.5 border-[1px] border-solid border-[#283b77] text-base text-[#283b77] font-poppins transition-all shadow-lg">
          Past
        </div>
      </Flex>
      <Flex
        direction={'column'}
        className="w-full h-[40vh] overflow-scroll no-scrollbar mt-3 text-white "
      >
        {data.map((service) => (
          <Box
            className="w-full sm:w-[33vw] p-2 bg-white border-2 mb-2 rounded-xl shadow-md"
            key={service.id}
          >
            <Link href={service.link}>
              <Flex className="w-full h-fit items-center">
                <Flex
                  direction={'column'}
                  align={'center'}
                  className="border-primary border-2 p-3 rounded-md"
                >
                  <Text
                    as="p"
                    className="text-primary text-xl font-bold font-poppins"
                  >
                    {service.date.getDate()}
                  </Text>
                  <Text as="p" className="text-primary text-sm font-poppins">
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
                    className=" text-sm font-poppins pl-2 pr-2 rounded-full bg-primary text-white font-bold"
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
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default Appointments;
