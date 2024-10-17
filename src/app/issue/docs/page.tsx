'use client'
import Topbar from '@/components/Topbar';
import UploadImage from '@/components/UploadImage';
import { IoIosArrowBack } from 'react-icons/io';

export default function Docs() {
  return (
    <>
      <Topbar title="Upload Documents" leftIcon={<IoIosArrowBack fontSize={'24px'} />} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <UploadImage
          cloudinaryUrl="https://api.cloudinary.com/v1_1/dgn4bscl4/upload"
          uploadPreset="infinimed"
        />
      </div>
      
    </>
  );
}
