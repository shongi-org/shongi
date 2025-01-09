import { Flex } from '@radix-ui/themes';

import Recommendation from '@/components/Recommendation';
import SelectArea from '@/components/SelectArea';
import ServiceList from '@/components/ServiceList';
import SearchIcon from '@/components/SearchIcon';
import NotificationIcon from '@/components/NotificationIcon';
import SearchBar from '@/components/SearchBar';
import ServiceSliders from '@/components/ServiceSliders';
import NavbarTop from '@/components/desktop/NavbarTop';
import SideNavbar from '@/components/desktop/SideNavbar';

// import ProfileAvatar from '@/components/ProfileAvatar';

export default function Home() {
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
            <SelectArea></SelectArea>
            <Flex className="w-1/5" justify={'between'}>
              <SearchIcon></SearchIcon>
              <NotificationIcon></NotificationIcon>
            </Flex>
          </Flex>
          <SearchBar></SearchBar>
          <Recommendation></Recommendation>
          <ServiceList></ServiceList>
          <ServiceSliders></ServiceSliders>
        </div>

        <div className="hidden lg:flex mt-[50px]">
          <div className="w-[20vw] fixed h-full border-gray-300 border-r-[1px]">
            <SideNavbar></SideNavbar>
          </div>
          <div className="w-[70vw] ml-[25vw]">
            <Recommendation></Recommendation>
            <ServiceList></ServiceList>
            <ServiceSliders></ServiceSliders>
          </div>
        </div>
      </Flex>
    </>
  );
}
