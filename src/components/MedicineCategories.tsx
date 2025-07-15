'use client';
import React, { ReactNode, useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

type MedicineCategoriesProps = {
  children?: ReactNode;
};

type IMedicineCategory = {
  id: number;
  value: string;
  label: string;
};
const MedicineCategories: React.FC<MedicineCategoriesProps> = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState<boolean>(false);
  const data: IMedicineCategory[] = [
    {
      id: 1,
      value: 'recommended',
      label: 'Recommended For You',
    },
    {
      id: 2,
      value: 'cardiac',
      label: 'Cardiac',
    },
    {
      id: 3,
      value: 'orthopaedic',
      label: 'Orthopaedic',
    },
    {
      id: 4,
      value: 'diabetic',
      label: 'Diabetic',
    },
    {
      id: 5,
      value: 'cardiac',
      label: 'Cardiac',
    },
    {
      id: 6,
      value: 'orthopaedic',
      label: 'Orthopaedic',
    },
    {
      id: 7,
      value: 'diabetic',
      label: 'Diabetic',
    },
  ];

  return (
    <div className="w-[90vw] lg:w-full flex flex-wrap gap-3 mt-4 ">
      {data.slice(0, showMore ? data.length : 3).map((category) => (
        <div
          key={category.id}
          className="rounded-full bg-[#283b77] py-0.5 px-2.5 border border-transparent text-base text-white font-poppins transition-all shadow-lg "
        >
          {category.label}
        </div>
      ))}
      <p
        className="font-poppins font-bold"
        onClick={() => {
          setShowMore((prev) => !prev);
        }}
      >
        {' '}
        {t(showMore ? 'common.showLess' : 'common.showMore')}
      </p>
    </div>
  );
};
export default MedicineCategories;
