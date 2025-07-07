'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import loader from '@/assets/loader.svg';
import Button from '@/components/Button';
import { getPatientsByUser } from '@/services/getPatientsByUser';
import { IPatient } from '@/interfaces/IPatient';

interface PatientListProps {
  onPatientSelect?: (patient: IPatient) => void;
  showSelectButton?: boolean;
  selectedPatientId?: string;
  className?: string;
  searchTerm?: string;
}

const PatientList: React.FC<PatientListProps> = ({
  onPatientSelect,
  showSelectButton = false,
  selectedPatientId,
  className = '',
  searchTerm = '',
}) => {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');
  const [isClient, setIsClient] = useState(false);

  // Get authentication state from Redux
  const isLoggedIn = useAppSelector(state => state.setIsLoggedIn);

  // Prevent hydration mismatch by only showing auth-dependent UI after client mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchPatients = async () => {
      if (isLoggedIn) {
        try {
          setLoading(true);
          setError('');
          const userPatients = await getPatientsByUser();
          setPatients(userPatients);
        } catch (error) {
          console.error('Error fetching patients:', error);
          setError('Failed to load your patients');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPatients();
  }, [isLoggedIn]);

  const handlePatientClick = (patient: IPatient) => {
    if (onPatientSelect) {
      onPatientSelect(patient);
    }
  };

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return null;
  }

  // Don't show anything if user is not logged in
  if (!isLoggedIn) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-gray-500">Please log in to view your patients.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={`flex justify-center py-8 ${className}`}>
        <Image className="w-8 h-8" src={loader} alt="Loading patients..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-red-500 text-center py-4 ${className}`}>
        <div className="bg-red-50 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  if (patients.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500 mb-2">No patients found.</p>
          <p className="text-sm text-gray-400">
            Create your first patient to get started.
          </p>
        </div>
      </div>
    );
  }

  // Filter patients based on search term
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (searchTerm && filteredPatients.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500 mb-2">No patients found matching "{searchTerm}".</p>
          <p className="text-sm text-gray-400">
            Try adjusting your search term.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {filteredPatients.map((patient) => (
        <div
          key={patient._id}
          className={`flex justify-between items-center p-4 border rounded-lg transition-colors ${
            showSelectButton 
              ? 'hover:bg-gray-50 cursor-pointer' 
              : 'bg-white shadow-sm'
          } ${
            selectedPatientId === patient._id 
              ? 'bg-blue-50 border-blue-200' 
              : 'border-gray-200'
          }`}
          onClick={showSelectButton ? () => handlePatientClick(patient) : undefined}
        >
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-lg">
              Name: {patient.name}
            </h3>
            <div className="flex items-center space-x-4 mt-1">
              <span className="text-sm text-gray-600 capitalize">
                Gender: {patient.gender}
              </span>
              <span className="text-sm text-gray-600">
                Born: {new Date(patient.dob).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
          
          {showSelectButton && onPatientSelect && (
            <Button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePatientClick(patient);
              }}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 ml-4"
            >
              Select
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PatientList;
