'use client'; 

import { useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface DatePickerProps {
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDayClick = (range: DateRange | undefined) => {
    if (range && range.from) {
      onDateChange(range.from); // Use 'from' as the selected date
    } else {
      onDateChange(undefined);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={selectedDate ? selectedDate.toLocaleDateString() : ''}
        onClick={() => setIsOpen(!isOpen)}
        readOnly
        placeholder="Select Date"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isOpen && (
        <div className="absolute z-10 bg-white shadow-lg rounded-lg mt-2">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(date) => handleDayClick({ from: date, to: date })} 
          />
        </div>
      )}
    </div>
  );
};
