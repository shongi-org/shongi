import React from 'react';
import AppointmentDetails from './(components)/AppointmentDetails';
import Area from './(components)/Area';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <div className="p-[2vw] lg:p-0 relative w-full">
      <div className="w-full lg:w-1/2">
        <p className="font-poppins text-xl font-bold">Appointment Details</p>
        <AppointmentDetails />
        <Area />
      </div>
    </div>
  );
};
export default page;
