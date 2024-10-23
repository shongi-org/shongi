import { Flex } from '@radix-ui/themes';

import Recommendation from '@/components/Recommendation';
import SelectArea from '@/components/SelectArea';
import ServiceList from '@/components/ServiceList';
import Appointments from '@/components/Appointments';
import ProfileAvatar from '@/components/ProfileAvatar';

export default function Home() {
  return (
    <>
      <Flex
        className="w-full overflow-x-hidden p-3"
        justify={'center'}
        direction="column"
      >
        <Flex justify={'between'} align={'center'}>
          <SelectArea></SelectArea>
          <ProfileAvatar></ProfileAvatar>
        </Flex>

        <Recommendation></Recommendation>
        <ServiceList></ServiceList>
        <Appointments></Appointments>
      </Flex>
    </>
  );
}
