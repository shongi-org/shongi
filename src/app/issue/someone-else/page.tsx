import React from 'react';

import ForSomeoneElseForm from './components/ForSomeoneElse.form';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <div className="p-[2vw] lg:p-0 relative w-full lg:flex">
      <div className="lg:w-full lg:p-2">
        <ForSomeoneElseForm />
      </div>
    </div>
  );
};
export default page;
