'use client';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  // const [orderSuccessful, setOrderSuccessful] = useState<string>('');

  return (
    <>
      {/* <SearchBarSpecific purpose="medicine" /> */}

      <div className="relative flex flex-col items-center">
        <>{children}</>
      </div>
    </>
  );
}
