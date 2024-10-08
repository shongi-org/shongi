import { ICart } from '@/interfaces/ICart';
import { Box, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';
import Counter from './Counter';

type OrderItemListProps = {};

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
    <div className="mt-4 border-b-2 border-black">
      <Box className="w-full">
        {data.orderItems.map((item) => (
          <Flex
            align={'center'}
            width={'full'}
            justify={'between'}
            className="border-cyan-700 border-2 p-2 rounded-md mb-2"
            key={item.id}
          >
            <Image
              src={item.image}
              width={50}
              height={50}
              alt="cart-item"
            ></Image>
            <div>
              <p className="font-poppins">{item.generic}</p>
              <p className="font-poppins">
                {item.marketName},{item.brand}
              </p>
            </div>
            <Counter></Counter>
          </Flex>
        ))}
      </Box>
      <Box>
        <Flex justify={'between'}>
          {' '}
          <p className="font-poppins font-bold">Summary</p>
          <p className="font-poppins font-bold">{data.cartTotal}</p>
        </Flex>
        <Flex justify={'between'}>
          {' '}
          <p className="font-poppins font-bold">Delivery Fee</p>
          <p className="font-poppins font-bold">{data.deliveryFee}</p>
        </Flex>
        <Flex justify={'between'}>
          {' '}
          <p className="font-poppins font-bold">Total</p>
          <p className="font-poppins font-bold">{data.total}</p>
        </Flex>
      </Box>
    </div>
  );
};
export default OrderItemList;
