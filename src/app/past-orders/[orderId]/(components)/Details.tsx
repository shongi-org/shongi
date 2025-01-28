'use client';
import Timeline, { Status } from '@/components/Timeline';
import { IAppointmentDetails } from '@/interfaces/IAppointment';
import { getAppointment } from '@/services/getAppointment';
import { Flex } from '@radix-ui/themes';
import { format } from 'date-fns';
// import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type DetailsProps = object;

const AppointmentDetails: React.FC<DetailsProps> = () => {
  const { orderId } = useParams();
  const [appointment, setAppointment] = useState<IAppointmentDetails>();

  useEffect(() => {
    getAppointment(orderId as string)
      .then((res) => res.json())
      .then((res) => {
        setAppointment(res);
      });
  }, []);

  return (
    <>
      <Flex
        align={'center'}
        width={'90vw'}
        direction={'column'}
        justify={'between'}
        className="mt-[5vh] p-2 rounded-md shadow-lg shadow-[#283891] mb-[5vh] border-[#283891]"
      >
        <Flex className="items-center w-full">
          {/* <Image
            src={
              'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png'
            }
            className="lg:w-[5vw] w-auto h-fit"
            width={50}
            height={50}
            alt="cart-item"
          ></Image> */}
          <div className="ml-2">
            <p className="font-poppins font-bold text-2xl">
              {appointment?.issue_id.service_id.name}
            </p>
            <p className="font-poppins mt-2">
              <span className="text-gray-700 font-bold">Appointment Date</span>{' '}
              {appointment?.time_frame &&
                new Date(
                  appointment?.time_frame.start_time as string,
                ).toLocaleDateString()}
              <br />
              <span className="text-gray-700 font-bold">Timeframe</span>{' '}
              {appointment?.time_frame &&
                format(
                  new Date(appointment?.time_frame.start_time as string),
                  'hh:mm a',
                )}{' '}
              -{' '}
              {appointment?.time_frame &&
                format(
                  new Date(appointment?.time_frame.end_time as string),
                  'hh:mm a',
                )}
            </p>
          </div>
        </Flex>
        <Flex
          align={'start'}
          width={'90vw'}
          className="p-2 ml-4 font-poppins font-bold"
        >
          Investigation documents
        </Flex>
        <Flex align={'start'} width={'90vw'} className="p-2 ml-2">
          {appointment?.issue_id.assets.map((asset) => (
            <img
              key={asset}
              src={asset}
              height={50}
              width={50}
              alt="service-asset"
              className="m-2"
            ></img>
          ))}
        </Flex>
      </Flex>
      <Timeline currentStatus={appointment?.status as Status}></Timeline>
    </>
  );
};
export default AppointmentDetails;
