import { Flex } from '@radix-ui/themes';

import Recommendation from '@/components/Recommendation';
import SelectArea from '@/components/SelectArea';
import ServiceList from '@/components/ServiceList';
import SearchIcon from '@/components/SearchIcon';
import NotificationIcon from '@/components/NotificationIcon';
import SearchBar from '@/components/SearchBar';
import ServiceSliders from '@/components/ServiceSliders';
// import ProfileAvatar from '@/components/ProfileAvatar';

export default function Home() {
  return (
    <>
      <Flex
        className="w-full overflow-x-hidden p-3 "
        justify={'center'}
        direction="column"
      >
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
      </Flex>
    </>
  );
}
