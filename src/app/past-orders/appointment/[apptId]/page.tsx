import React from 'react';
import AppointmentDetails from './(components)/ApppointmentDetails';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <div className=" relative w-full flex items-center ">
      <div className="w-full flex flex-col items-center">
        <AppointmentDetails />
      </div>
    </div>
  );
};
export default page;
