import React from 'react';
import { IMedicine } from '@/interfaces/IMedicine';

type MedicineCardProps = {
  medicine: IMedicine;
};

const MedicineCard: React.FC<MedicineCardProps> = ({ medicine }) => {
  return (
    <div className="w-[45vw] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg p-2" src={medicine.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {medicine.generic}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Brand name : {medicine.brand} <br />
          Market name : {medicine.marketName}
        </p>
        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add to Cart
        </div>
      </div>
    </div>
  );
};
export default MedicineCard;
