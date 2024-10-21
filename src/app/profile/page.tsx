import * as Tabs from '@radix-ui/react-tabs';
import * as Avatar from '@radix-ui/react-avatar';
import { Flex, Text } from '@radix-ui/themes';
import React from 'react';

type profileProps = object;

const profile: React.FC<profileProps> = () => {
  return (
    <>
      <Flex
        width={'full'}
        gap={'2'}
        direction={'column'}
        justify={'center'}
        align={'center'}
      >
        <Flex
          width={'full'}
          height={'20vh'}
          direction={'column'}
          justify={'center'}
          align={'center'}
        >
          <Avatar.Root>
            <Avatar.Image
              src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1685504283/1670986805718_x7kecr.jpg"
              alt="profile-pic"
              // fallback="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1685504283/1670986805718_x7kecr.jpg"
              className="w-[20vw] rounded-full"
            ></Avatar.Image>
          </Avatar.Root>
          <Text as="p">Noel Alam, 26</Text>
        </Flex>
        <Flex
          pt={'10vh'}
          direction={'column'}
          width={'100%'}
          height={'80vh'}
          align={'center'}
          justify={'start'}
          className="bg-cyan-700 rounded-2xl"
        >
          <Tabs.Root
            className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA2"
            defaultValue="tab1"
          >
            <Tabs.List
              className="shrink-0 flex border-b border-mauve6"
              aria-label="Manage your account"
            >
              <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                value="tab1"
              >
                Address
              </Tabs.Trigger>
              <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                value="tab2"
              >
                Password
              </Tabs.Trigger>
              <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                value="tab3"
              >
                Account
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              value="tab1"
            >
              <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                Make changes to your account here. Click save when you are done.
              </p>
              <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                <label
                  className="text-[13px] leading-none mb-2.5 text-violet12 block"
                  htmlFor="name"
                >
                  Address
                </label>
                <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  id="address"
                  defaultValue="Pedro Duarte"
                />
              </fieldset>

              <div className="flex justify-end mt-5">
                <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                  Save changes
                </button>
              </div>
            </Tabs.Content>
            <Tabs.Content
              className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              value="tab2"
            >
              <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                Password
              </p>
              <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                <label
                  className="text-[13px] leading-none mb-2.5 text-violet12 block"
                  htmlFor="currentPassword"
                >
                  Current password
                </label>
                <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  id="currentPassword"
                  type="password"
                />
              </fieldset>
              <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                <label
                  className="text-[13px] leading-none mb-2.5 text-violet12 block"
                  htmlFor="newPassword"
                >
                  New password
                </label>
                <input
                  className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  id="newPassword"
                  type="password"
                />
              </fieldset>
            </Tabs.Content>
            <Tabs.Content
              className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              value="tab3"
            >
              <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                Logout
              </p>
              <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                Delete
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </Flex>
      </Flex>
    </>
  );
};
export default profile;
