'use client';
import React from 'react';
import { IMedicine } from '@/interfaces/IMedicine';

type MedicineCardProps = {
  medicine: IMedicine & {
    _id: string;
    generic: {
      name: string;
    };
    name: string;
  };
};

const MedicineCard: React.FC<MedicineCardProps> = ({ medicine }) => {
  console.log(medicine);
  return <></>;
};
export default MedicineCard;
