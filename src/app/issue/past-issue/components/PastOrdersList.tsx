'use client';
import { Box, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { getPastOrders } from '@/services/getPastOrders';
import { IPastOrder } from '@/interfaces/IPastOrder';
import Link from 'next/link';

type PastOrdersListProps = {
  children?: string;
};

const PastOrdersList: React.FC<PastOrdersListProps> = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
    getPastOrders(page)
      .then((res) => res.json())
      .then((res) => {
        setOrders(res);
      });
  }, []);

  return (
    <div className="w-full mt-4 ">
      <h2 className="font-poppins text-2xl mb-2 font-bold">Orders</h2>
      <Box className="">
        {Object.values(orders).map((item: IPastOrder) => {
          return (
            <Link key={item._id} href={`/past-orders/order/${item._id}`}>
              <Flex
                align={'center'}
                width={'full'}
                justify={'between'}
                className="border-2 p-2 rounded-md mb-2 shadow-md"
                key={item._id}
              >
                <Flex>
                  <Image
                    src={
                      'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png'
                    }
                    width={50}
                    height={50}
                    alt="cart-item"
                  ></Image>
                  <div className="ml-2">
                    <p className="font-poppins font-bold">Pharamacy</p>
                    <p className="font-poppins">
                      {item.medicine_name}...<Link href={``}>See Details</Link>
                    </p>
                  </div>
                </Flex>

                <div className="rounded-full bg-[#283b77] lg:py-0.5 lg:px-2.5 px-1 border border-transparent text-base text-white font-poppins transition-all shadow-lg text-center">
                  {item.status}
                </div>
              </Flex>
            </Link>
          );
        })}
      </Box>
    </div>
  );
};
export default PastOrdersList;
