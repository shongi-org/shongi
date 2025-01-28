'use client';
// import { ICart } from '@/interfaces/ICart';
import { Box, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';
import Counter from './Counter';
import { useAppSelector } from '@/lib/hooks';
import { IMedicine } from '@/interfaces/IMedicine';
import { IAppointment } from '@/interfaces/IAppointment';

type OrderItemListProps = {
  children?: string;
};

// const data: ICart = {
//   orderItems: [
//     {
//       id: 1,
//       image:
//         'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png',
//       generic: 'paracetamol',
//       brand: 'Square',
//       marketName: 'Napa',
//       quantity: 3,
//     },
//     {
//       id: 2,
//       image:
//         'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png',
//       generic: 'paracetamol',
//       brand: 'Square',
//       marketName: 'Napa',
//       quantity: 3,
//     },
//   ],
//   deliveryFee: 30,
// };
// data.cartTotal = data.orderItems.reduce((acc, curr) => acc + curr.quantity, 0);
// data.total = data.cartTotal + data.deliveryFee;

const OrderItemList: React.FC<OrderItemListProps> = () => {
  const cart = useAppSelector((state) => state.addToCart.items);

  return (
    <div className="w-full mt-4 ">
      <Box className="">
        {Object.values(cart).map((item) => {
          if (item.type === 'medicine') {
            return (
              <Flex
                align={'center'}
                width={'full'}
                justify={'between'}
                className="border-2 p-2 rounded-md mb-2 shadow-md"
                key={item.id}
              >
                <Flex>
                  <Image
                    src={
                      (item as IMedicine).image ||
                      'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png'
                    }
                    width={50}
                    height={50}
                    alt="cart-item"
                  ></Image>
                  <div className="ml-2">
                    <p className="font-poppins">
                      {(item as IMedicine).generic.name}
                    </p>
                    <p className="font-poppins">
                      {(item as IMedicine).name},{(item as IMedicine).brand}
                    </p>
                  </div>
                </Flex>
                <Counter quantity={item.quantity}></Counter>
              </Flex>
            );
          }
          if (item.type === 'appointment') {
            return (
              <Flex
                align={'center'}
                width={'full'}
                justify={'between'}
                className="border-2 p-2 rounded-md mb-2 shadow-md"
                key={item.id}
              >
                <Flex>
                  <Image
                    src={(item as IAppointment).image as string}
                    width={50}
                    height={50}
                    alt="cart-item"
                  ></Image>
                  <div className="ml-2">
                    <p className="font-poppins">
                      {(item as IAppointment).service_name}
                    </p>
                    <p className="font-poppins">
                      {(item as IAppointment).time_frame.date}
                    </p>
                    <p className="font-poppins">
                      between {(item as IAppointment).time_frame.start_time}-
                      {(item as IAppointment).time_frame.end_time}
                    </p>
                  </div>
                </Flex>
                <Counter quantity={item.quantity}></Counter>
              </Flex>
            );
          }
        })}
      </Box>
      <Box className="mt-5 mb-5">
        <Flex justify={'between'} className="mb-2">
          {' '}
          <p className="font-poppins font-bold text-gray-400">Summary</p>
          <p className="font-poppins font-bold ">
            {Object.values(cart).reduce(
              (acc, curr) => acc + curr.quantity * curr.price,
              0,
            )}
            Tk
          </p>
        </Flex>
        <Flex
          justify={'between'}
          className="border-b-2 border-black border-dotted pb-5"
        >
          {' '}
          <p className="font-poppins font-bold text-gray-400">Delivery Fee</p>
          <p className="font-poppins font-bold">{30}Tk</p>
        </Flex>
        <Flex justify={'between'} className="mt-5">
          {' '}
          <p className="font-poppins font-bold text-gray-400">Total</p>
          <p className="font-poppins font-bold">
            {Object.values(cart).reduce(
              (acc, curr) => acc + curr.quantity * curr.price,
              0,
            ) + 30}{' '}
            Tk
          </p>
        </Flex>
      </Box>
    </div>
  );
};
export default OrderItemList;
