'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import MedicineCard from './MedicineCard';
import { IMedicine } from '@/interfaces/IMedicine';
import { config } from '@/config';

type MedicineListProps = {
  children?: ReactNode;
};

const MedicineList: React.FC<MedicineListProps> = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>();
  useEffect(() => {
    async function fetchMedicines() {
      const response = await fetch(`${config.backendURL}/api/medicine/`);
      const data = await response.json();

      setMedicines(data);
    }
    fetchMedicines();
  }, []);
  return (
    <div className="flex flex-wrap w-[100vw] lg:w-full justify-evenly lg:justify-start gap-y-3 mt-3 pb-20">
      {(medicines as (IMedicine & { _id: string })[])?.map(
        (medicine: IMedicine & { _id: string }) => (
          <div key={medicine.id} className="w-[45vw] lg:w-[15vw] lg:m-2">
            <MedicineCard medicine={medicine} />
          </div>
        ),
      )}
    </div>
  );
};
export default MedicineList;
