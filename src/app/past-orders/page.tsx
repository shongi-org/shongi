import React from 'react';
import PastOrdersList from './components/PastOrdersList';
import PastAppointmentsList from './components/PastAppointments';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <div className="p-[2vw] lg:p-0 relative w-full lg:flex">
      <div className="lg:w-1/2 lg:p-2">
        <PastOrdersList></PastOrdersList>
      </div>
      <div className="lg:w-1/2 lg:p-2">
        <PastAppointmentsList />
      </div>
    </div>
  );
};
export default page;
