import { ICart } from '@/interfaces/ICart';
import { Box, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';
import Counter from './Counter';

type OrderItemListProps = {
  children?: string;
};

const data: ICart = {
  orderItems: [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png',
      generic: 'paracetamol',
      brand: 'Square',
      marketName: 'Napa',
      quantity: 3,
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png',
      generic: 'paracetamol',
      brand: 'Square',
      marketName: 'Napa',
      quantity: 3,
    },
  ],
  deliveryFee: 30,
};
data.cartTotal = data.orderItems.reduce((acc, curr) => acc + curr.quantity, 0);
data.total = data.cartTotal + data.deliveryFee;

const OrderItemList: React.FC<OrderItemListProps> = () => {
  return (
    <div className="w-full mt-4 ">
      <Box className="">
        {data.orderItems.map((item) => (
          <Flex
            align={'center'}
            width={'full'}
            justify={'between'}
            className="border-2 p-2 rounded-md mb-2 shadow-md"
            key={item.id}
          >
            <Flex>
              <Image
                src={item.image}
                width={50}
                height={50}
                alt="cart-item"
              ></Image>
              <div className="ml-2">
                <p className="font-poppins">{item.generic}</p>
                <p className="font-poppins">
                  {item.marketName},{item.brand}
                </p>
              </div>
            </Flex>
            <Counter></Counter>
          </Flex>
        ))}
      </Box>
      <Box className="mt-5 mb-5">
        <Flex justify={'between'} className="mb-2">
          {' '}
          <p className="font-poppins font-bold text-gray-400">Summary</p>
          <p className="font-poppins font-bold ">{data.cartTotal}Tk</p>
        </Flex>
        <Flex
          justify={'between'}
          className="border-b-2 border-black border-dotted pb-5"
        >
          {' '}
          <p className="font-poppins font-bold text-gray-400">Delivery Fee</p>
          <p className="font-poppins font-bold">{data.deliveryFee}Tk</p>
        </Flex>
        <Flex justify={'between'} className="mt-5">
          {' '}
          <p className="font-poppins font-bold text-gray-400">Total</p>
          <p className="font-poppins font-bold">{data.total}Tk</p>
        </Flex>
      </Box>
    </div>
  );
};
export default OrderItemList;
