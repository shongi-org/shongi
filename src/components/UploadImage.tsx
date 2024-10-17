import React, { useState } from 'react';
import {
  AiOutlinePlus,
  AiOutlineDelete,
  AiOutlineUpload,
} from 'react-icons/ai';
import axios from 'axios';
import Button from './Button';

interface UploadImageProps {
  cloudinaryUrl: string; 
  uploadPreset: string; 
}

const UploadImage: React.FC<UploadImageProps> = ({
  cloudinaryUrl,
  uploadPreset,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); 
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return; 

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', uploadPreset);

    try {
      setUploading(true); 
      const response = await axios.post(cloudinaryUrl, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Image uploaded successfully!');
      console.log('Upload response:', response.data);

      setUploading(false);
      handleDelete();
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <label className="cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <AiOutlinePlus className="text-4xl text-blue-500 hover:text-blue-700" />
      </label>

      {previewUrl && (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-48 h-48 object-cover"
          />
          <button
            onClick={handleDelete}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-700"
          >
            <AiOutlineDelete />
          </button>
        </div>
      )}

      {previewUrl && (
        <Button type='button'
          onClick={handleUpload}
          className="bg-primary text-white py-2 px-4 rounded hover:bg-green-700 flex items-center"
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload'}
          <AiOutlineUpload className="ml-2" />
        </Button>
      )}

     
    </div>
  );
};

export default UploadImage;
