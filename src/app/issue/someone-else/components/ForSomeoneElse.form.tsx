'use client';

import { Button } from '@/components/ui/button';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Input } from '@/components/ui/input';
import { DatePicker } from '@/components/Calendar';
import SelectComponent from '@/components/ui/select';
import { validateSomeoneElse } from '@/lib/utils/validateSomeoneElseForm';

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
export default function LoginPage() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [dob, setDob] = useState<Date | undefined>(undefined);

  const router = useRouter();

  const searchParams = useSearchParams();
  const service_id = searchParams.get('service_id');
  const service_name = searchParams.get('service_name');

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }
  function handleSelectChange(e: string) {
    setGender(e);
  }

  function handleSubmit() {
    if (validateSomeoneElse(name, dob as Date, gender) !== 'success') {
      setError(() => validateSomeoneElse(name, dob as Date, gender));
    } else {
      router.push(
        `/issue/docs/?service_id=${service_id}&service_name=${service_name}&for_someone=true&name=${name}&dob=${new Date(dob as Date).toISOString()}&gender=${gender}`,
      );
    }
  }

  return (
    <Suspense>
      <div className=" flex items-center justify-center bg-gray-100 pb-[40vh] pt-[20vh]">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Enter Patient Details
          </h1>
          <Input
            onChange={handleChange}
            className="h-14 text-xl mb-3"
            type="name"
            placeholder="Name"
          />
          {/* <div>
            <label htmlFor="gender" className="sr-only">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="h-14 text-xl flex w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option className="w-full" value="Male">
                Male
              </option>
              <option className="w-full" value="Female">
                Female
              </option>
              <option className="w-full" value="Other">
                Other
              </option>
            </select>
          </div> */}
          <SelectComponent
            handleChange={handleSelectChange}
            options={options}
            placeholder="Select Gender"
          />
          <div>
            <label htmlFor="dob" className="sr-only">
              Date of Birth
            </label>
            <DatePicker selectedDate={dob} onDateChange={setDob} />
          </div>
          <div className="text-lg text-red-700 font-bold">{error}</div>
          <div className="flex flex-col items-end">
            <Button
              className="h-14 text-xl mt-2"
              type="submit"
              onClick={handleSubmit}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
