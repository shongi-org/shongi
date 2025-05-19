import { ReactNode, Suspense } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className=" ">
        <div className="relative flex flex-col items-center">
          <Suspense>
            <>{children}</>
          </Suspense>
        </div>
      </div>
    </>
  );
}
