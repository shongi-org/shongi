// import CartButton from '@/components/CartButton';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Add Patient Details',
  description: 'Choose Issue',
};

// import SearchBarSpecific from '@/components/SearchBarSpecific';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <>{children}</>
    </Suspense>
  );
}
