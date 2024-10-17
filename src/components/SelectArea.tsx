import { Select } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';

type SelectAreaProps = {
  children?: string;
};

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
    <>
      <div className=" flex items-center justify-between">
        <Image
          src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729074290/marker_majhpp.png"
          alt="marker"
          width={50}
          height={50}
          className="h-8 w-auto mr-5"
        ></Image>
        <Select.Root defaultValue="1">
          <Select.Trigger variant="ghost" />
          <Select.Content>
            {data.map((area) => (
              <Select.Item
                className="font-poppins"
                key={area.id}
                value={area.id.toString()}
              >
                <p className="text-base font-poppins">{area.area}</p>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
    </>
  );
};
export default SelectArea;
