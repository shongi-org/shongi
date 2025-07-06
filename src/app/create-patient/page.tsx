'use client';

import { DatePicker } from '@/components/Calendar';
import { Suspense, useEffect, useState } from 'react';
import Button from '@/components/Button';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import SelectComponent from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import loader from '@/assets/loader.svg';
import { setAppointment } from '@/lib/features/appointment/appointmentDetails';
import { getPatientsByUser } from '@/services/getPatientsByUser';
import { IPatient } from '@/interfaces/IPatient';

const options = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

export default function CreatePatientPage() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState<Date | undefined>(undefined);
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<IPatient | null>(null);
  const [isNewPatient, setIsNewPatient] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [patientsLoading, setPatientsLoading] = useState<boolean>(false);
  const [error, setError] = useState('');
  const [patientsError, setPatientsError] = useState('');
  const [isClient, setIsClient] = useState(false);

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get authentication state from Redux
  const isLoggedIn = useAppSelector(state => state.setIsLoggedIn);

  // Prevent hydration mismatch by only showing auth-dependent UI after client mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  const service_name = searchParams.get('service_name');
  const service_id = searchParams.get('service_id');
  const price = searchParams.get('price');
  const duration = searchParams.get('duration');

  useEffect(() => {
    if (duration === 'null') {
      router.push('/');
    }
  }, [duration, router]);

  useEffect(() => {
    const fetchPatients = async () => {
      if (isLoggedIn) {
        try {
          setPatientsLoading(true);
          setPatientsError('');
          const userPatients = await getPatientsByUser();
          setPatients(userPatients);
        } catch (error) {
          console.error('Error fetching patients:', error);
          setPatientsError('Failed to load your patients');
        } finally {
          setPatientsLoading(false);
        }
      }
    };

    fetchPatients();
  }, [isLoggedIn]);

  const handlePatientSelect = (patient: IPatient) => {
    setSelectedPatient(patient);
    setName(patient.name);
    setGender(patient.gender);
    setDob(new Date(patient.dob));
    setIsNewPatient(false);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name || !gender || !dob) {
      setError('Please fill up all the fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Navigate to next step
      router.push(`/schedule-appointment?duration=${duration}`);

      // Dispatch appointment data
      dispatch(
        setAppointment({
          // Send either existing patient ID or new patient details
          ...(isNewPatient
            ? {
              patient_details: {
                name,
                gender,
                dob,
              }
            }
            : {
              existing_patient_id: selectedPatient?._id
            }
          ),
          service_name: service_name as string,
          service_id: service_id as string,
          price: parseInt(price as string),
        }),
      );
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Suspense>
      <div className="pt-[10vh] h-[200vh] flex items-start justify-center bg-gray-100">
        <div className="max-w-md w-[95vw] space-y-8 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-center">
            Patient Details
          </h2>

          {/* Show patient list only for logged in users - prevent hydration mismatch */}
          {isClient && isLoggedIn && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                Select Existing Patient
              </h3>

              {patientsLoading && (
                <div className="flex justify-center py-4">
                  <Image className="w-6 h-6" src={loader} alt="Loading patients..." />
                </div>
              )}

              {patientsError && (
                <div className="text-red-500 text-sm text-center py-2">
                  {patientsError}
                </div>
              )}

              {!patientsLoading && !patientsError && patients.length > 0 && (
                <div className="space-y-2 max-h-40 overflow-y-auto border rounded-lg p-2">
                  {patients.map((patient) => (
                    <div
                      key={patient._id}
                      className={`flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ${selectedPatient?._id === patient._id ? 'bg-blue-50 border-blue-200' : ''
                        }`}
                    >
                      <div>
                        <p className="font-medium text-gray-900">{patient.name}</p>
                        <p className="text-sm text-gray-600">
                          {patient.gender} • {new Date(patient.dob).toLocaleDateString()}
                        </p>
                      </div>
                      <Button
                        type="button"
                        onClick={() => handlePatientSelect(patient)}
                        className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700"
                      >
                        Select
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              {!patientsLoading && !patientsError && patients.length === 0 && (
                <div className="text-gray-500 text-center py-4">
                  No patients found. Create your first patient below.
                </div>
              )}
              <hr className="my-4" />
            </div>
          )}

          {/* Patient form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <Input
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
                value={name}
                className="h-14 text-xl"
                type="text"
                placeholder="Patient Name"
                required
              />
              <SelectComponent
                handleChange={(value) => setGender(value)}
                options={options}
                value={gender}
                placeholder="Select Gender"
              />
              <div>
                <label htmlFor="dob" className="sr-only">
                  Date of Birth
                </label>
                <DatePicker
                  selectedDate={dob}
                  onDateChange={setDob}
                  allowPastDates={true}
                  placeholder="Date of Birth"
                />
              </div>
            </div>

            <div>
              {error && (
                <div className="text-red-500 text-sm mb-4 text-center bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={loading}
              >
                {loading ? (
                  <Image
                    className="w-[2rem] h-[2rem] text-white"
                    src={loader}
                    alt="Loading..."
                  />
                ) : (
                  'Continue'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Suspense>
  );
}
