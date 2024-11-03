'use client';
// import Button from '@/components/Button';
import Topbar from '@/components/Topbar';
import { Box, Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

type IssueChoice = {
  id: number;
  label: string;
  image: string;
};

const options: IssueChoice[] = [
  {
    id: 1,
    label: 'New Issue',
    image:
      'https://res.cloudinary.com/dgayarw1f/image/upload/v1730665005/cvs-health-scriptpath-prescription-bottle-schedule-media-gallery_yv8sml.jpg',
  },
  {
    id: 2,
    label: 'Past Issue',
    image:
      'https://res.cloudinary.com/dgayarw1f/image/upload/v1730665004/history_dbxrbv.jpg',
  },
  {
    id: 3,
    label: 'Someone Else',
    image:
      'https://res.cloudinary.com/dgayarw1f/image/upload/v1730665004/6-Important-Benefits-Of-Having-A-Family-Doctor_a5ziww.jpg',
  },
];

const Issue = () => {
  // const router = useRouter();
  // const handleButtonClick = () => {
  //   router.push('/issue/services');
  // };

  return (
    <>
      <Topbar title="Issue" leftIcon={<IoIosArrowBack fontSize={'24px'} />} />
      <div className="flex justify-center min-h-screen">
        <div className="w-full p-4 space-y-1 ">
          {options.map((option) => (
            <Box className="w-[95vw] sm:w-[33vw] mr-3 mt-3 " key={option.id}>
              <Link href={`/issue/docs`}>
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
