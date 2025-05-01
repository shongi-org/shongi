'use client';
import { IMedicine } from '@/interfaces/IMedicine';
// import { addToCart } from '@/lib/features/cart/addToCart';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import { Box } from '@radix-ui/themes';
import React from 'react';

type AddToCartButtonProps = {
  medicine: IMedicine & {
    _id: string;
    generic: {
      name: string;
    };
    name: string;
  };
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ medicine }) => {
  console.log(medicine);
  // const dispatch = useAppDispatch();

  // const cart = useAppSelector((state) => state.addToCart.items);

  // function handleAddToCart(quantityToAdd: number) {
  //   dispatch(
  //     addToCart({
  //       ...medicine,
  //       id: medicine._id,
  //       quantity: quantityToAdd,
  //       type: 'medicine',
  //     }),
  //   );
  // }

  return (
    <div className="fixed bottom-[9vh] w-[96vw] lg:w-[30vw] ">
      {/* {cart[medicine._id]?.quantity ? (
        <div className="w-full inline-flex items-center justify-between">
          <div
            onClick={() => handleAddToCart(-1)}
            className="w-10 px-3 py-2 text-lg font-poppins text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            -
          </div>
          <div className="text-lg font-poppins text-white bg-primary rounded-lg w-10 px-3 py-2 text-center">
            {cart[medicine._id as string].quantity}
          </div>

          <div
            onClick={() => handleAddToCart(1)}
            className="w-10 px-3 py-2 text-lg font-poppins text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            +
          </div>
        </div>
      ) : (
        <Box onClick={() => handleAddToCart(1)} className="">
          <Box className="bg-white text-primary border-solid border-2 border-primary font-poppins font-bold text-xl p-3 text-center rounded-md mb-2 cursor-pointer">
            Add to Cart
          </Box>
        </Box>
      )} */}
    </div>
  );
};
export default AddToCartButton;
