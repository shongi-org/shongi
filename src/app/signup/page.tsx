'use client'; // Make sure this is the first line

// import { Input } from '@/components/Input';
import { DatePicker } from '@/components/Calendar';
import { Suspense, useState } from 'react';
import Button from '@/components/Button';
import { createUser } from '@/services/createUser';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import SelectComponent from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setIsLoggedIn } from '@/lib/features/auth/isLoggedIn';
import Image from 'next/image';
import loader from '@/assets/loader.svg';
import { createAppointment } from '@/services/createAppointment';

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

  const phone_number = searchParams.get('phone_number');
  const from_cart = searchParams.get('from_cart');
  const appointment = useAppSelector((state) => state.appointment);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name && !gender && !dob) {
      setError('Please fill up all the fields');
      return;
    }
    setLoading(true);
    createUser({
      first_name: name.split(' ')[0],
      last_name: name.split(' ').slice(1).join(' ') || '',
      phone_number: phone_number as string,
      sex: gender,
      role: 'regular',
      date_of_birth: dob as Date,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLoading(false);
        if (res.user) {
          if (res.token) {
            localStorage.setItem('token', res.token);
            dispatch(setIsLoggedIn(true));
          }

          if (from_cart === 'true') {
            createAppointment(appointment)
              .then((res) => res.json())
              .then((res) => {
                router.push(`/order-success?order_id = ${res._id}`);
              })
              .catch((error) => {
                setLoading(false);
                console.log(error);
                setError(
                  `Server Error trying to create Appointment. Please try again`,
                );
              });
          } else {
            router.push('/');
          }
        } else {
          setError('Server Error trying to create Account. Please try again');
          console.log('server error');
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        console.log(error);
      });
  };

  return (
    <Suspense>
      <div className="min-h-[200vh] flex items-start pt-[20vh] justify-center bg-gray-100">
        <div className="max-w-md w-[95vw] space-y-8 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-center">
            Create your account
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
                  placeholder="Select Date of Birth"
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
                  'Create Account'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Suspense>
  );
}
