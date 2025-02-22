import React from 'react';
import PastNotificationsList from './components/NotificationsList';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <div className="p-[2vw] lg:p-0 relative w-full lg:flex">
      <div className="lg:w-full lg:p-2">
        <PastNotificationsList />
      </div>
    </div>
  );
};
export default page;
