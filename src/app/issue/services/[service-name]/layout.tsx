// import CartButton from '@/components/CartButton';

import { ReactNode } from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Select Category',
  description: 'Choose Issue',
};

// import SearchBarSpecific from '@/components/SearchBarSpecific';

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
