// import type { Metadata } from 'next';

import { setIsLoggedIn } from '@/lib/features/auth/isLoggedIn';
import { useAppDispatch } from '@/lib/hooks';
import { isLoggedIn } from '@/services/isLoggedIn';
import { useEffect } from 'react';

export default function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = localStorage.getItem('token');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      isLoggedIn(token)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.userId) {
            dispatch(setIsLoggedIn(true));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return <>{children}</>;
}
