'use client';
import Topbar from '@/components/Topbar';
import UploadImage from '@/components/UploadImage';
import { createIssue } from '@/services/createIssue';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export default function Docs() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const service_id = searchParams.get('service_id');
  const service_name = searchParams.get('service_name');
  const for_someone = searchParams.get('for_someone');

  async function onUploadImage(assets: string[]) {
    const JWTToken = localStorage.getItem('token');
    const createdIssueResponse = await createIssue({
      token: JWTToken as string,
      for_someone: for_someone ? true : false,
      service_id: service_id as string,
      assets: assets,
    });
    const createdIssue = await createdIssueResponse.json();
    router.push(
      `./schedule?issue_id=${createdIssue._id}&service_name=${service_name}`,
    );
    alert(
      'Your Issue has been recorded. Please schedule a time suitable time for an appointment',
    );
  }

  return (
    <>
      <Topbar
        title="Upload Documents"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      />
      <div className="min-h-[90vh] flex items-center justify-center bg-gray-100">
        <UploadImage
          cloudinaryUrl="https://api.cloudinary.com/v1_1/dgn4bscl4/upload"
          uploadPreset="infinimed"
          onUploadImage={onUploadImage}
        />
      </div>
    </>
  );
}
