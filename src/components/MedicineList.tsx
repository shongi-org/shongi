'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import MedicineCard from './MedicineCard';
import { IMedicine } from '@/interfaces/IMedicine';
import { config } from '@/config';
import { useAppSelector } from '@/lib/hooks';

type MedicineListProps = {
  children?: ReactNode;
};

const MedicineList: React.FC<MedicineListProps> = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const medicineSearchResults = useAppSelector(
    (state) => state.medicineSearchResults,
  );
  useEffect(() => {
    async function fetchMedicines() {
      try {
        const response = await fetch(`${config.backendURL}/api/medicine/`);
        const data = await response.json();
        setMedicines(data);
        setLoading(false);
      } catch (err) {
        setError(err as string);
        setLoading(false);
      }
    }
    fetchMedicines();
  }, []);

  return (
    <div className="flex flex-wrap w-[100vw] lg:w-full justify-evenly lg:justify-start gap-y-3 mt-3 pb-20">
      {error && <p>Faced a server error. Please refresh</p>}
      {loading && <p>Fetching Medicines</p>}
      {(medicineSearchResults.length > 0
        ? (medicineSearchResults as (IMedicine & { _id: string })[])
        : (medicines as (IMedicine & { _id: string })[])
      )?.map((medicine: IMedicine & { _id: string }) => (
        <div key={medicine.id} className="w-[45vw] lg:w-[15vw] lg:m-2">
          <MedicineCard medicine={medicine} />
        </div>
      ))}
    </div>
  );
};
export default MedicineList;
