'use client';
import NavbarTop from '@/components/desktop/NavbarTop';
import SideNavbar from '@/components/desktop/SideNavbar';
import Topbar from '@/components/Topbar';
import { useAppSelector } from '@/lib/hooks';
import { createAppointment } from '@/services/createAppointment';
import { Box, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import loader from '@/assets/loader.svg';
import { useTranslation } from '@/hooks/useTranslation';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const isLoggedIn = useAppSelector((state) => state.setIsLoggedIn);
  const appointment = useAppSelector((state) => state.appointment);
  const { t } = useTranslation();

  async function handlePlaceOrder() {
    if (!isLoggedIn) {
      router.push('/login?from_cart=true');
      return;
    }
    setLoading(true);

    try {
      const response = await createAppointment(appointment);
      const order = await response.json();
      router.push(`/order-success?order_id = ${order._id}`);
    } catch (error) {
      setLoading(false);
      setError(`Server Error : ${error}. Please try again`);
    }
  }
  return (
    <>
      <NavbarTop></NavbarTop>

      <div className="hidden lg:block w-[20vw] fixed h-full border-gray-300 border-r-[1px]">
        <SideNavbar></SideNavbar>
      </div>
      <div className="lg:w-[70vw] lg:ml-[25vw] lg:mt-[50px]">
        <div className="relative flex flex-col items-center">
          <Topbar
            title={t('cart.title')}
            leftIcon={<IoIosArrowBack fontSize={'24px'} />}
          ></Topbar>
          <>{children}</>
        </div>
        <Box className="pb-[10vh] lg:p-0">
          <div>{error}</div>
          <Flex
            onClick={handlePlaceOrder}
            justify={'center'}
            className="w-[96vw] lg:w-[35vw] lg:m-0 lg:mt-1 bg-[#283b77] text-white font-poppins font-bold text-xl p-3 text-center rounded-md cursor-pointer m-auto justify-center"
          >
            {loading ? (
              <Image
                src={loader}
                width={30}
                height={30}
                alt="loading"
                className="animate-spin"
              />
            ) : (
              t('cart.placeOrder')
            )}
          </Flex>
        </Box>
      </div>
    </>
  );
}
