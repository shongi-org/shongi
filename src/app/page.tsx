'use client';

import { Flex } from '@radix-ui/themes';
import Recommendation from '@/components/Recommendation';
// import SelectArea from '@/components/SelectArea';
import ServiceList from '@/components/ServiceList';
// import SearchIcon from '@/components/SearchIcon';
import NotificationIcon from '@/components/NotificationIcon';
import SearchBar from '@/components/SearchBar';
import NavbarTop from '@/components/desktop/NavbarTop';
import SideNavbar from '@/components/desktop/SideNavbar';
// import UpcomingAppointment from '@/components/UpcomingAppointment';
import WhyChooseUs from '@/components/WhyChooseUs';
import Sliders from '@/components/Sliders';
import AgentSignup from '@/components/AgentSignup';
import { Suspense } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

// import ProfileAvatar from '@/components/ProfileAvatar';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* desktop navbar  */}
      <NavbarTop></NavbarTop>
      <Flex
        className="w-full overflow-x-hidden p-3 relative"
        justify={'center'}
        direction="column"
      >
        {/* For Mobile */}
        <div className="lg:hidden">
          <Flex justify={'between'} align={'center'}>
            {/* <SelectArea></SelectArea> */}
            <Image
              height={50}
              width={50}
              src={`https://res.cloudinary.com/dlezm6lou/image/upload/v1746101704/Untitled-1_nalqks.png`}
              alt="logo"
            ></Image>
            <p className="font-poppins no-scrollbar font-bold text-xl">
             {t('welcomeToShongi')}
            </p>
            <span> </span>

            <Flex className="" justify={'between'}>
              {/* <SearchIcon></SearchIcon> */}
              <NotificationIcon></NotificationIcon>
            </Flex>
          </Flex>
          <SearchBar></SearchBar>
          <Recommendation></Recommendation>
          {/* <UpcomingAppointment></UpcomingAppointment> */}
          <ServiceList></ServiceList>
          <Suspense>
            <WhyChooseUs></WhyChooseUs>
            <Sliders />
            <AgentSignup></AgentSignup>
          </Suspense>
        </div>

        <div className="hidden lg:flex mt-[7vh]">
          <div className="w-[20vw] fixed h-full border-gray-300 border-r-[1px]">
            <SideNavbar></SideNavbar>
          </div>
          <div className="w-full ml-[25vw]">
            <Recommendation></Recommendation>
            {/* <UpcomingAppointment></UpcomingAppointment> */}
            <ServiceList></ServiceList>
            <Suspense>
              <WhyChooseUs></WhyChooseUs>
              <Sliders />
              <AgentSignup></AgentSignup>
            </Suspense>
          </div>
        </div>
      </Flex>
    </>
  );
}
