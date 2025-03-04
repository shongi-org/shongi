import React from 'react';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <div className="flex w-full p-3">
      <p className=" font-poppins text-xl">No offers yet</p>
    </div>
  );
};
export default page;
