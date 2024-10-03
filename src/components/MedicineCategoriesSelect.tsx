import React from 'react';
import { Select } from '@radix-ui/themes';
type MedicineCategoriesSelectProps = {};

type IMedicineCategory = {
  id: number;
  label: string;
  value: string;
};

const data: IMedicineCategory[] = [
  {
    id: 1,
    label: 'Pain Killers',
    value: 'pain-killers',
  },
];

const MedicineCategoriesSelect: React.FC<
  MedicineCategoriesSelectProps
> = () => {
  return (
    <div className="w-[45vw]">
      <Select.Root defaultValue="1">
        <Select.Trigger variant="ghost" />
        <Select.Content>
          {data.map((category) => (
            <Select.Item
              className="font-poppins "
              key={category.id}
              value={category.value.toString()}
            >
              <p className="text-base font-poppins">{category.label}</p>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};
export default MedicineCategoriesSelect;
