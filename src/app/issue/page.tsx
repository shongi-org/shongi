'use client';
import Topbar from '@/components/Topbar';
import { useAppSelector } from '@/lib/hooks';

import { Box, Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

type IssueChoice = {
  id: number;
  label: string;
  image: string;
  link: string;
};

const options: IssueChoice[] = [
  {
    id: 1,
    label: 'New Issue',
    link: '/docs',
    image:
      'https://res.cloudinary.com/dgayarw1f/image/upload/v1730665005/cvs-health-scriptpath-prescription-bottle-schedule-media-gallery_yv8sml.jpg',
  },
  {
    id: 2,
    label: 'Past Issue',
    link: '/past-issue',
    image:
      'https://res.cloudinary.com/dgayarw1f/image/upload/v1730665004/history_dbxrbv.jpg',
  },
  {
    id: 3,
    label: 'Someone Else',
    link: '/someone-else',
    image:
      'https://res.cloudinary.com/dgayarw1f/image/upload/v1730665004/6-Important-Benefits-Of-Having-A-Family-Doctor_a5ziww.jpg',
  },
];

const Issue = () => {
  const searchParams = useSearchParams();
  const service_id = searchParams.get('service_id');
  const service_name = searchParams.get('service_name');
  const isLoggedIn = useAppSelector((state) => state.setIsLoggedIn);
  console.log(service_id);

  return (
    <>
      <Topbar title="Issue" leftIcon={<IoIosArrowBack fontSize={'24px'} />} />
      <div className="flex justify-center min-h-screen">
        <div className="w-full p-4 space-y-1">
          {options.map((option) => (
            <Box className="w-[95vw] sm:w-[33vw] mr-3 mt-3" key={option.id}>
              <Link
                href={`${isLoggedIn ? `./issue/${option.link}?service_id=${service_id}&service_name=${service_name}` : `./login?service_id=${service_id}&service_name=${service_name}`}`}
              >
                <Flex className="w-[95vw] h-fit justify-start items-end relative">
                  <Flex className="flex absolute w-[95vw] pl-4 pb-6 text-start justify-start items-center ">
                    <Text
                      as="p"
                      weight="bold"
                      className="text-white text-4xl font-poppins z-10"
                    >
                      {option.label}
                    </Text>
                  </Flex>

                  <Image
                    width={200}
                    height={200}
                    className="w-[93vw] h-auto rounded-lg brightness-50"
                    alt="service"
                    src={option.image}
                  />
                </Flex>
              </Link>
            </Box>
          ))}
        </div>
      </div>
    </>
  );
};

export default Issue;
