import React from 'react';

import PastIssuesList from './components/PastIssues';

type pageProps = object;

const page: React.FC<pageProps> = () => {
  return (
    <div className="p-[2vw] lg:p-0 relative w-full lg:flex">
      <div className="lg:w-full lg:p-2">
        <PastIssuesList />
      </div>
    </div>
  );
};
export default page;
