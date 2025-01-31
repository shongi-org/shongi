import * as React from 'react';
import { Select } from 'radix-ui';
import classnames from 'classnames';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const SelectComponent = ({
  options,
  placeholder,
  handleChange,
}: {
  options: { label: string; value: string }[];
  placeholder: string;
  handleChange: (e: string) => void;
}) => (
  <Select.Root onValueChange={handleChange}>
    <Select.Trigger
      className="inline-flex h-14 items-center justify-between gap-[5px] border border-input rounded bg-white px-3 py-1 text-xl w-full leading-none text-violet11 mb-3  outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9"
      aria-label={placeholder}
    >
      <Select.Value placeholder={placeholder} />
      <Select.Icon className="text-violet11">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] w-full">
        <Select.ScrollUpButton className="flex h-14 cursor-default items-center justify-center bg-white text-violet11 px-3 py-1 text-xl shadow-sm">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px] w-full">
          <Select.Group>
            {options.map((option: { label: string; value: string }) => (
              <Select.Item
                key={option.value}
                className={classnames(
                  'relative flex h-14 w-full select-none items-center rounded-[3px] pl-2 pr-[35px] text-xl leading-none text-violet11 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none',
                )}
                value={option.value}
              >
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
        {/* <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
          <ChevronDownIcon />
        </Select.ScrollDownButton> */}
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default SelectComponent;
