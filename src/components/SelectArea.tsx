'use client';
import { IArea } from '@/interfaces/IArea';
import { setArea } from '@/lib/features/area/area';
import { changeAreaDropDownOpenState } from '@/lib/features/areaDropDownOpen/searchBarVisibility';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Select } from '@radix-ui/themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { MouseEventHandler, useEffect, useState } from 'react';

type SelectAreaProps = {
  children?: string;
};

const areas: IArea[] = [
  {
    _id: '1',
    detail: '',
    area: 'Dhanmondi',
    geocode: {
      lat: 23,
      long: 91,
    },
  },
  {
    _id: '2',
    detail: '',
    area: 'Gulshan',
    geocode: {
      lat: 23,
      long: 91,
    },
  },
  {
    _id: '3',
    detail: '',
    area: 'Beribadh',
    geocode: {
      lat: 23,
      long: 91,
    },
  },
];

const SelectArea: React.FC<SelectAreaProps> = () => {
  const dispatch = useAppDispatch();
  const area = useAppSelector((state) => state.area);

  const [currentArea, setCurrentArea] = useState<IArea>({
    _id: '',
    geocode: {
      lat: 0,
      long: 0,
    },
    detail: '',
    area: '',
  });
  const router = useRouter();

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://barikoi.xyz/v2/api/search/reverse/geocode?api_key=bkoi_c89eb01cd546186469d208b0ff0f461b47969fa9be9366e593ae2ed6642df13b&longitude=${longitude}&latitude=${latitude}&address=true&area=true`,
          );
          const data = await response.json();
          setCurrentArea({
            _id: '0',
            geocode: {
              lat: latitude,
              long: longitude,
            },
            detail: data.place.address,
            area: data.place.area,
          });
          if (!area._id) {
            dispatch(
              setArea({
                _id: '0',
                geocode: {
                  lat: latitude,
                  long: longitude,
                },
                detail: data.place.address,
                area: data.place.area,
              }),
            );
          }
        },
        (error) => {
          console.error('Error getting user location:', error);
        },
      );
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  function onAreaChange(e: string) {
    if (e === 'current-area') {
      dispatch(setArea(currentArea));
    } else if (e === 'choose-area') {
      router.push('/add-area');
    } else {
      const area = areas.find((area) => (area._id = e));
      dispatch(setArea(area as IArea));
    }
  }

  const handleItemClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  function onOpenChange() {
    dispatch(changeAreaDropDownOpenState());
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <Image
          src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1729074290/marker_majhpp.png"
          alt="marker"
          width={50}
          height={50}
          className="h-8 w-auto mr-5"
        ></Image>
        <Select.Root
          onValueChange={onAreaChange}
          defaultValue="current-location"
          onOpenChange={onOpenChange}
        >
          <Select.Trigger variant="ghost" />
          <Select.Content className="font-poppins z-1000 absolute w-[70vw]">
            <Select.Item className="font-poppins" value={'current-location'}>
              <p className="text-base font-poppins">
                {area.area || currentArea.area || ''}
              </p>
            </Select.Item>
            {areas.map((area: IArea) => (
              <Select.Item
                className="font-poppins"
                key={area._id}
                value={area._id.toString()}
                onClick={handleItemClick}
              >
                <p className="text-base font-poppins">{area.area}</p>
              </Select.Item>
            ))}
            <Select.Item
              onClick={handleItemClick}
              className="font-poppins z-1000 absolute"
              value={'choose-area'}
            >
              <p className="text-base font-poppins w-fit">
                Choose Area on the map
              </p>
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </>
  );
};
export default SelectArea;
