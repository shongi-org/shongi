'use client';
import Timeline, { Status } from '@/components/Timeline';
import { IOrderDetails } from '@/interfaces/IOrderItem';

import { getOrder } from '@/services/getOrder';
import { Box, Flex } from '@radix-ui/themes';

// import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type DetailsProps = object;

const OrderDetails: React.FC<DetailsProps> = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState<IOrderDetails>();

  useEffect(() => {
    getOrder(orderId as string)
      .then((res) => res.json())
      .then((res) => {
        setOrder(res);
      });
  }, []);

  return (
    <>
      <Flex
        align={'center'}
        width={'full'}
        justify={'between'}
        className="border-2 p-2 rounded-md mb-2 shadow-md font-poppins"
      >
        <Flex direction={'column'} className="ml-2 w-[90vw] lg:w-[40vw]">
          <p className="font-bold">Cart Items</p>
          <div className="">
            {order?.cart_id.cartItems.map((cartItem) => (
              <div
                key={cartItem.medicine_id._id}
                className="flex items-center border-b-[1px] border-gray-400 mt-3"
              >
                <img
                  width={70}
                  height={70}
                  src={
                    'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png'
                  }
                  alt="medicine"
                />
                <Box>
                  <p>
                    <span className="text-gray-500 font-bold">Generic </span>{' '}
                    {cartItem.medicine_id.name}
                  </p>

                  <p>
                    <span className="text-gray-500 font-bold">Brand </span>
                    {cartItem.medicine_id.brand}
                  </p>

                  <p>
                    <span className="text-gray-500 font-bold">Quantity </span>
                    {cartItem.quantity}
                  </p>
                </Box>
              </div>
            ))}
          </div>
        </Flex>
      </Flex>
      <Timeline currentStatus={order?.status as Status}></Timeline>
    </>
  );
};
export default OrderDetails;
