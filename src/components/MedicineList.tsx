import React, { ReactNode } from 'react';
import MedicineCard from './MedicineCard';
import { IMedicine } from '@/interfaces/IMedicine';

type MedicineListProps = {
  children?: ReactNode;
};

const MedicineList: React.FC<MedicineListProps> = () => {
  const data: IMedicine[] = [
    {
      id: '1',
      generic: 'paracetamol',
      dosage: '20mg tablet',
      image:
        'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png',
      price: 40,
      brand: 'Square',
      marketName: 'Napa',
      type: 'medicine',
    },
    {
      id: '2',
      generic: 'paracetamol',
      dosage: '20mg tablet',
      image:
        'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png',
      price: 40,
      brand: 'Square',
      marketName: 'Napa',
      type: 'medicine',
    },
    {
      id: '3',
      generic: 'paracetamol',
      dosage: '20mg tablet',
      image:
        'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png',
      price: 40,
      brand: 'Square',
      marketName: 'Napa',
      type: 'medicine',
    },
    {
      id: '4',
      generic: 'paracetamol',
      dosage: '20mg tablet',
      image:
        'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png',
      price: 40,
      brand: 'Square',
      marketName: 'Napa',
      type: 'medicine',
    },
    {
      id: '5',
      generic: 'paracetamol',
      dosage: '20mg tablet',
      image:
        'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1727873184/medicine_883407_jolgrg.png',
      price: 40,
      brand: 'Square',
      marketName: 'Napa',
      type: 'medicine',
    },
  ];
  return (
    <div className="flex flex-wrap w-[100vw] justify-evenly gap-y-3 mt-3 pb-20">
      {data.map((medicine) => (
        <div key={medicine.id} className="w-[45vw] ">
          <MedicineCard medicine={medicine} />
        </div>
      ))}
    </div>
  );
};
export default MedicineList;
