'use client';
import React from 'react';
import { Box, Flex } from '@radix-ui/themes';
import { useAppSelector } from '@/lib/hooks';

type CartButtonProps = object;

const CartButton: React.FC<CartButtonProps> = () => {
  const cart = useAppSelector((state) => state.addToCart.items);

  return (
    <Box className="absolute bottom-0 mb-2">
      <Flex
        justify={'center'}
        className="w-[96vw] bg-primary flex text-white font-poppins font-medium p-3 text-xl rounded-md"
      >
        <p className="w-1/2 text-end pr-2">Cart</p>
        <p>|</p>
        <p className="w-1/2 text-start pl-2">
          {Object.values(cart).reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.price * currentValue.quantity,
            0,
          )}
          Tk
        </p>
      </Flex>
    </Box>
  );
};
export default CartButton;
