'use client';
import { Box, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getPastAppointments } from '@/services/getPastAppointments';
import { IPastAppointment } from '@/interfaces/IPastAppointments';
import { formatTime } from '@/lib/utils/changeTimeformat';
import { IAgent } from '@/interfaces/IAgent';

type PastOrdersListProps = {
  children?: string;
};

const PastAppointmentsList: React.FC<PastOrdersListProps> = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getPastAppointments()
      .then((res) => res.json())
      .then((res) => {
        setOrders(res);
      });
  }, []);

  return (
    <div className="w-full mt-4">
      <h2 className="font-poppins text-2xl mb-2 font-bold">Appointments</h2>
      <Box className="">
        {Object.values(orders).map((item: IPastAppointment) => {
          return (
            <div key={item?._id} className="mb-4">
              <div className="border-2 p-2 rounded-md shadow-md bg-white">
                <Flex
                  align={'center'}
                  width={'full'}
                  justify={'between'}
                >
                  <Flex className="items-center">
                    <Image
                      src={
                        'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1740306044/appointment_qrpcom.png'
                      }
                      className="lg:w-[5vw] w-auto h-fit"
                      width={50}
                      height={50}
                      alt="cart-item"
                    />
                    <div className="ml-2">
                      <p className="font-poppins">
                        <span className="text-gray-700 font-bold">Date:</span>{' '}
                        {item?.date
                          ? new Date(item.date).toLocaleDateString('en-GB')
                          : 'N/A'}
                        <br />
                        <span className="text-gray-700 font-bold">
                          Home Address:
                        </span>{' '}
                        {item?.home_address || 'N/A'}
                        <br />
                        <span className="text-gray-700 font-bold">
                          Hospital Address:
                        </span>{' '}
                        {item?.hospital_address || 'N/A'}
                        <br />
                        <span className="text-gray-700 font-bold">
                          Agent Gender:
                        </span>{' '}
                        {item?.preferred_agent_gender || 'N/A'}
                        <br />
                        <span className="text-gray-700 font-bold">Transport:</span>{' '}
                        {item?.transport_mode || 'N/A'}
                        <br />
                        <span className="text-gray-700 font-bold">
                          Payment Option:
                        </span>{' '}
                        {item?.payment_option || 'N/A'}
                        <br />
                        <span className="text-gray-700 font-bold">
                          Payment Method:
                        </span>{' '}
                        {item?.payment_method || 'N/A'}
                        <br />
                        <span className="text-gray-700 font-bold">Timeframe:</span>{' '}
                        {formatTime(item?.time_frame?.start_time.split('_')[1])} -{' '}
                        {formatTime(item?.time_frame?.end_time.split('_')[1])}
                      </p>
                    </div>
                  </Flex>

                  <div className="rounded-full bg-[#283b77] lg:py-0.5 lg:px-2.5 px-1 border border-transparent text-base text-white font-poppins transition-all shadow-lg text-center">
                    {item?.status}
                  </div>
                </Flex>
                {item.agent && isPopulatedAgent(item.agent) && (
                  <div className="mt-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200 flex flex-col gap-1">
                    <div className="font-bold text-indigo-800 mb-1">Assigned Agent</div>
                    <div className="text-indigo-900"><span className="font-semibold">Name:</span> {item.agent.name || 'N/A'}</div>
                    <div className="text-indigo-900"><span className="font-semibold">Phone:</span> {item.agent.phone || 'N/A'}</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Box>
    </div>
  );
};

function isPopulatedAgent(agent: unknown): agent is IAgent {
  return typeof agent === 'object' && agent !== null && 'name' in agent && 'phone' in agent;
}

export default PastAppointmentsList;
