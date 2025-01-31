import React from 'react';
import OrderDetails from './(components)/OrderDetails';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <div className="p-[2vw] relative w-full flex items-center">
      <div className="w-full flex flex-col items-center">
        <OrderDetails />
      </div>
    </div>
  );
};
export default page;
