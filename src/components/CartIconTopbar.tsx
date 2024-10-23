'use client';
import Image from 'next/image';
import React from 'react';
import cart from '@/assets/cart.png';
import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';

type CartIconTopbarProps = object;

const CartIconTopbar: React.FC<CartIconTopbarProps> = () => {
  const cartItems = useAppSelector((state) => state.addToCart.items);
  return (
    <Link href={'/cart'}>
      <div className="relative">
        <Image src={cart} alt="cart" />
        <div className="absolute bottom-[-15px] right-[15px] bg-indigo-900 pl-[6px] pt-[1px] pb-[1px] pr-[6px] rounded-full mt-8 text-white font-poppins">
          {' '}
          {Object.values(cartItems).reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.price * currentValue.quantity,
            0,
          )}
          Tk
        </div>
      </div>
    </Link>
  );
};
export default CartIconTopbar;
