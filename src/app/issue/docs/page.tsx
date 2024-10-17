'use client'
import UploadImage from '@/components/UploadImage';

export default function Docs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <UploadImage
        cloudinaryUrl="https://api.cloudinary.com/v1_1/dgn4bscl4/upload"
        uploadPreset="infinimed"
      />
    </div>
  );
}
