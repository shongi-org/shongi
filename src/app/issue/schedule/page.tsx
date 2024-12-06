'use client';

import { useState } from 'react';
import {
  format,
  isBefore,
  startOfDay,
  addMinutes,
  setHours,
  isAfter,
} from 'date-fns';
import { DayPicker } from 'react-day-picker';
import * as Select from '@radix-ui/react-select';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import 'react-day-picker/dist/style.css';
import { useRouter, useSearchParams } from 'next/navigation';
import FloatingCallButton from '@/components/FloatingCallButton';
import '@/styles/schedule.page.css';
import Button from '@/components/Button';
import { CiCircleInfo } from 'react-icons/ci';
import Topbar from '@/components/Topbar';
import { IoIosArrowBack } from 'react-icons/io';
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/lib/features/cart/addToCart';

export default function SchedulePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const issue_id = searchParams.get('issue_id');
  const service_name = searchParams.get('service_name');
  const dispatch = useAppDispatch();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedStartTime, setSelectedStartTime] = useState<
    string | undefined
  >(undefined);

  const handleDateChange = (date: Date | undefined) => {
    if (date && isBefore(date, startOfDay(new Date()))) {
      alert('Please select a future date!');
      return;
    }
    setSelectedDate(date);
    setSelectedStartTime(undefined);
  };

  const generateStartTimeOptions = () => {
    const timeOptions: string[] = [];
    const now = new Date();
    let startTime = selectedDate
      ? startOfDay(selectedDate)
      : startOfDay(new Date());

    const minutes = now.getMinutes();

    const nextHalfHour =
      minutes % 30 === 0 ? minutes : Math.ceil(minutes / 30) * 30;

    startTime = setHours(startTime, now.getHours());
    startTime.setMinutes(nextHalfHour);

    const earliestStart = setHours(startOfDay(selectedDate || now), 10);

    const latestStart = setHours(startOfDay(selectedDate || now), 18);
    // console.log(latestStart);
    for (let i = 0; i < 48; i++) {
      const time = addMinutes(startTime, i * 30);
      console.log(time);
      if (
        !isAfter(time, latestStart) &&
        !isBefore(time, earliestStart) &&
        !isBefore(time, now)
      ) {
        timeOptions.push(format(time, 'HH:mm'));
      }
    }

    return timeOptions;
  };

  const getEndTime = (startTime: string) => {
    if (!startTime) return undefined;
    const [startHour, startMinutes] = startTime.split(':').map(Number);
    const startDateTime = setHours(
      addMinutes(startOfDay(selectedDate!), startHour * 60 + startMinutes),
      startHour,
    );
    const endTime = addMinutes(startDateTime, 4 * 60);
    return format(endTime, 'HH:mm');
  };

  const handleStartTimeChange = (value: string) => {
    setSelectedStartTime(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedStartTime) {
      alert('Please select a date and start time!');
      return;
    }

    const endTime = getEndTime(selectedStartTime);

    dispatch(
      addToCart({
        id: issue_id as string,

        time_frame: {
          date: selectedDate.toDateString(),
          start_time: selectedStartTime,
          end_time: endTime as string,
        },
        quantity: 1,
        type: 'appointment',
        price: 300,
        service_name: service_name as string,
      }),
    );
    router.push('/cart');
  };

  return (
    <>
      <Topbar
        title="Appointment"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-sm w-full p-6 bg-white rounded-xl shadow-lg flex flex-col justify-evenly">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Select a Date for your appointment
              </label>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={handleDateChange}
                fromDate={new Date()}
                className="border rounded-lg p-2 bg-gray-50 w-full"
              />
            </div>

            {selectedDate && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select a Start Time
                </label>
                <Select.Root
                  value={selectedStartTime}
                  onValueChange={handleStartTimeChange}
                >
                  <Select.Trigger
                    className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                    aria-label="Start Time"
                  >
                    <Select.Value placeholder="Select a start time" />
                    <Select.Icon>
                      <FiChevronDown />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Content className="bg-white shadow-lg rounded-lg">
                    <Select.ScrollUpButton className="flex items-center justify-center p-2">
                      <FiChevronUp />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-2">
                      <Select.Group>
                        {generateStartTimeOptions().map((time, index) => (
                          <Select.Item
                            key={index}
                            value={time}
                            className="cursor-pointer select-none p-2 rounded-md hover:bg-blue-100"
                          >
                            <Select.ItemText>{time}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton className="flex items-center justify-center p-2">
                      <FiChevronDown />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Root>
              </div>
            )}

            {selectedStartTime && (
              <div className="text-lg font-medium text-gray-800 mt-1">
                End Time: {getEndTime(selectedStartTime)}
              </div>
            )}
            {selectedStartTime && (
              <div className="text-sm text-gray-500 mb-2 flex items-start">
                <CiCircleInfo className="mr-1 text-lg" />
                <span>The end time is automatically calculated.</span>
              </div>
            )}

            <div>
              <Button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                Schedule
              </Button>
            </div>
          </form>
        </div>
        <FloatingCallButton phoneNumber="1234567890" />
      </div>
    </>
  );
}
