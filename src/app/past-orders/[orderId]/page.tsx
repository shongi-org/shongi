import React from 'react';
import AppointmentDetails from './(components)/Details';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <div className="p-[2vw] relative w-full h-[60vh] flex items-center">
      <div className="w-full flex flex-col items-center">
        <AppointmentDetails />
      </div>
    </div>
  );
};
export default page;
