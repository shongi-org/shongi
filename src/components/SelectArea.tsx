import { Select } from '@radix-ui/themes';
import React from 'react';

type SelectAreaProps = {};

type IArea = {
  id: number;
  area: string;
  geocode: {
    lat: number;
    long: number;
  };
};

const SelectArea: React.FC<SelectAreaProps> = () => {
  const data: IArea[] = [
    {
      id: 1,
      area: 'Dhanmondi',
      geocode: {
        lat: 23,
        long: 91,
      },
    },
    {
      id: 2,
      area: 'Gulshan',
      geocode: {
        lat: 23,
        long: 91,
      },
    },
    {
      id: 3,
      area: 'Beribadh',
      geocode: {
        lat: 23,
        long: 91,
      },
    },
  ];
  return (
    <div className="w-[45vw]">
      <Select.Root defaultValue="1">
        <Select.Trigger variant="ghost" />
        <Select.Content>
          {data.map((area) => (
            <Select.Item
              className="font-poppins "
              key={area.id}
              value={area.id.toString()}
            >
              <p className="text-base font-poppins">{area.area}</p>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};
export default SelectArea;
