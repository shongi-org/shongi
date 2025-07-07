'use client';

import React, { useState } from 'react';
import PatientList from '@/components/PatientList';
import { Input } from '@/components/ui/input';
import { useAppSelector } from '@/lib/hooks';

const PatientsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const isLoggedIn = useAppSelector(state => state.setIsLoggedIn);

  return (
    <div className="w-full mt-4 px-4 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Patients</h1>
        </div>
      </div>

      {/* Search Bar */}
      {isLoggedIn && (
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search patients by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
      )}

      {/* Patient List */}
      <div className="border-2 p-2 rounded-md mb-2 shadow-md">
        <PatientList 
          showSelectButton={false}
          className="space-y-4"
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
};

export default PatientsPage;
