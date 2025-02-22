'use client';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className=" ">
        <div className="relative flex flex-col items-center">
          <>{children}</>
        </div>
      </div>
    </>
  );
}
