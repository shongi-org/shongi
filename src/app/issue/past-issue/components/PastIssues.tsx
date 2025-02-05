'use client';
import { Flex, Grid } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { getPastIssues } from '@/services/getPastIssues';
import { IIssueDetails } from '@/interfaces/IIssue';

type PastOrdersListProps = {
  children?: string;
};

const PastIssuesList: React.FC<PastOrdersListProps> = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
    console.log(page);
    getPastIssues(false)
      .then((res) => res.json())
      .then((res) => {
        setIssues(res);
      });
  }, []);

  return (
    <div className="w-full mt-4">
      <Grid columns={'3'} className="">
        {issues.map((item: IIssueDetails) => {
          return (
            item.assets.length > 0 && (
              <Flex
                align={'center'}
                key={item._id}
                justify={'between'}
                className="border-2 p-2 rounded-md mb-2 mr-2 shadow-md w-[98%]"
              >
                <Link
                  href={`/issue/schedule?issue_id=${item._id}&service_name=${item?.service_id?.name}`}
                >
                  <Flex
                    direction={'column'}
                    wrap={'wrap'}
                    className="items-start"
                  >
                    {/* <Image
                    src={item.service_id}
                    className="lg:w-[5vw] w-auto h-fit"
                    width={50}
                    height={50}
                    alt="cart-item"
                  ></Image> */}
                    <Flex
                      align={'center'}
                      justify={'start'}
                      className="p-2 ml-2 w-full lg:w-full"
                    >
                      {item?.assets.slice(0, 2).map((asset) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={asset}
                          src={asset}
                          height={100}
                          width={100}
                          alt="service-asset"
                          className="mr-2 w-1/3 h-[100px] object-contain"
                        ></img>
                      ))}
                      <p>
                        {item?.assets.length - 2 > 0 &&
                          `See ${item.assets.length - 2} More`}
                      </p>
                    </Flex>
                    <div className="ml-2">
                      <p className="font-poppins font-bold text-gray-500 text-sm">
                        Uploaded for {item?.service_id?.name} Service
                      </p>
                    </div>
                  </Flex>
                </Link>

                {/* <div className="rounded-full bg-[#283b77] lg:py-0.5 lg:px-2.5 px-1 border border-transparent text-base text-white font-poppins transition-all shadow-lg ">
                  {item.status}
                </div> */}
              </Flex>
            )
          );
        })}
      </Grid>
    </div>
  );
};
export default PastIssuesList;
