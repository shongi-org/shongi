import * as RadioGroup from '@radix-ui/react-radio-group';

interface RadioButtonProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  buttonWidth?: string;
  orientation?: 'vertical' | 'horizontal'; 
}

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  selectedValue,
  onValueChange,
  buttonWidth = 'w-full', 
  orientation = 'horizontal', 
}) => {
  const containerClass = `flex ${orientation === 'horizontal' ? 'flex-row space-x-4' : 'flex-col space-y-4'}`;

  return (
    <RadioGroup.Root
      className={containerClass}
      value={selectedValue}
      onValueChange={onValueChange}
      aria-label="Select option"
    >
      {options.map((option) => (
        <RadioGroup.Item
          key={option.value}
          className={`h-10 border-2 rounded-md text-center flex items-center justify-center cursor-pointer ${buttonWidth} ${
            selectedValue === option.value
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700'
          }`}
          value={option.value}
          id={option.value}
        >
          <label htmlFor={option.value} className="cursor-pointer">
            {option.label}
          </label>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};

export default RadioButton;
