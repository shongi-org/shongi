'use client';
import Topbar from '@/components/Topbar';
import UploadImage from './(components)/UploadImage';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { uploadProfilePic } from '@/services/uploadProfilePic';

export default function Page() {
  const router = useRouter();

  const [successfullyUploaded, setSuccessfullyUploaded] =
    useState<boolean>(false);

  async function onUploadImage(assets: string[]) {
    const updatedUserRes = await uploadProfilePic(assets[0]);

    const updatedUser = await updatedUserRes.json();
    if (updatedUser.profile_picture === assets[0]) {
      setSuccessfullyUploaded(true);
      router.push(`/profile`);
    } else {
      setSuccessfullyUploaded(false);
    }
  }

  async function handleSkip() {
    router.push(`/profile`);
  }

  return (
    <>
      <Topbar
        title="Upload Profile Picture"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      />
      <div className="min-h-[90vh] lg:min-h-[70vh] w-full flex items-center justify-center bg-gray-100">
        {successfullyUploaded ? (
          <>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Your profile picture has been uploaded. Redirecting you to the
              Profile Page.
            </label>
          </>
        ) : (
          <UploadImage
            cloudinaryUrl="https://api.cloudinary.com/v1_1/dgn4bscl4/upload"
            uploadPreset="infinimed"
            onUploadImage={onUploadImage}
            handleSkip={handleSkip}
          />
        )}
      </div>
    </>
  );
}
