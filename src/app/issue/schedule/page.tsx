'use client';

import { useState } from 'react';
import { format, isBefore, startOfDay, addMinutes } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import * as Select from '@radix-ui/react-select';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; 
import 'react-day-picker/dist/style.css';


export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined,
  );

  const handleDateChange = (date: Date | undefined) => {
    if (date && isBefore(date, startOfDay(new Date()))) {
      alert('Please select a future date!');
      return;
    }
    setSelectedDate(date);
    setSelectedTime(undefined);
  };

  const generateTimeOptions = () => {
    const timeOptions = [];
    const now = new Date();
    let startTime = selectedDate
      ? startOfDay(selectedDate)
      : startOfDay(new Date());

    if (
      selectedDate &&
      format(selectedDate, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd')
    ) {
      startTime = addMinutes(now, 30);
    }

    for (let i = 0; i < 48; i++) {
      const time = addMinutes(startTime, i * 30);
      if (!isBefore(time, now)) {
        timeOptions.push(format(time, 'HH:mm'));
      }
    }

    return timeOptions;
  };

  const handleTimeChange = (value: string) => {
    setSelectedTime(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert('Please select both a date and time!');
      return;
    }

    const scheduledDateTime = `${format(selectedDate, 'yyyy-MM-dd')} ${selectedTime}`;
    console.log('Scheduled Date and Time:', scheduledDateTime);
    alert(`Scheduled on: ${scheduledDateTime}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-sm w-full p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Schedule Event
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select a Date
            </label>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleDateChange}
              fromDate={new Date()}
              className="border rounded-lg p-2 bg-gray-50 w-full"
            />
          </div>

          {/* Time Picker */}
          {selectedDate && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select a Time
              </label>
              <Select.Root
                value={selectedTime}
                onValueChange={handleTimeChange}
              >
                <Select.Trigger
                  className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                  aria-label="Time"
                >
                  <Select.Value placeholder="Select a time" />
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
                      {generateTimeOptions().map((time, index) => (
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
