'use client'; // Make sure this is the first line

// import { Input } from '@/components/Input';
import { DatePicker } from '@/components/Calendar';
import { Suspense, useEffect, useState } from 'react';
import Button from '@/components/Button';
// import { createUser } from '@/services/createUser';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import SelectComponent from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useAppDispatch } from '@/lib/hooks';
// import { setIsLoggedIn } from '@/lib/features/auth/isLoggedIn';
import Image from 'next/image';
import loader from '@/assets/loader.svg';
import { setAppointment } from '@/lib/features/appointment/appointmentDetails';

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

export default function SignupPage() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState<Date | undefined>(undefined);

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (duration === 'null') {
      router.push('/');
    }
  }, []);

  const service_name = searchParams.get('service_name');
  const service_id = searchParams.get('service_id');
  const price = searchParams.get('price');
  const duration = searchParams.get('duration');

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name && !gender && !dob) {
      setError('Please fill up all the fields');
      return;
    }
    setLoading(true);
    router.push(`/schedule-appointment?duration=${duration}`);
    dispatch(
      setAppointment({
        patient_details: {
          name: name,
          gender: gender,
          dob: dob,
        },
        service_name: service_name as string,
        service_id: service_id as string,
        price: parseInt(price as string),
      }),
    );
    // createUser({
    //   first_name: name.split(' ')[0],
    //   last_name: name.split(' ').slice(1).join(' '),
    //   phone_number: phone_number as string,
    //   sex: gender,
    //   role: 'regular',
    //   verified: true,
    //   date_of_birth: dob as Date,
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     setLoading(false);
    //     if (res.user) {
    //       if (res.token) {
    //         localStorage.setItem('token', res.token);
    //         dispatch(setIsLoggedIn(true));
    //       }

    //       if (service_id) {
    //         router.push(
    //           `/issue/docs?service_id=${service_id}&service_name=${service_name}&price=${price}`,
    //         );
    //       } else if (from_cart === 'true') {
    //         router.push(`/cart`);
    //       } else {
    //         router.push(`/`);
    //       }
    //     } else {
    //       setError('Server Error. Please try again');
    //       console.log('server error');
    //     }
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     setError(err);
    //     console.log(error);
    //   });
  };

  return (
    <Suspense>
      <div className="pt-[10vh] h-[200vh] flex items-start justify-center bg-gray-100">
        <div className="max-w-md w-[95vw] space-y-8 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-center">
            Please provide Patient Details
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <Input
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
                className="h-14 text-xl "
                type="name"
                placeholder="Name"
              />
              <SelectComponent
                handleChange={(e) => setGender(e)}
                options={options}
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
              <div>{error}</div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={loading ? true : false}
              >
                {loading ? (
                  <Image
                    className="w-[2rem] h-[2rem] text-white"
                    src={loader}
                    alt="loader"
                  />
                ) : (
                  'Submit'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Suspense>
  );
}
