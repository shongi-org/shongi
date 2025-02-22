/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import {
  IGetStatusInfo,
  Status,
} from '@/app/issue/past-issue/appointment/[apptId]/(components)/ApppointmentDetails';
import {
  IGetOrderStatusInfo,
  IStatusOrder,
} from '@/app/issue/past-issue/order/[orderId]/(components)/OrderDetails';
// import { Icon, IconOptions } from 'leaflet';

import React from 'react';

interface TimelineProps {
  currentStatus: Status | IStatusOrder;
  getStatusInfo: IGetStatusInfo | IGetOrderStatusInfo;
  mainStatuses: string[];
  finalStatuses: string[];
}

const Timeline: React.FC<TimelineProps> = ({
  currentStatus = 'Client Declined',
  getStatusInfo,
  mainStatuses,
  finalStatuses,
}) => {
  const isActive = (status: Status) => {
    const allStatuses = [...mainStatuses, getFinalStatus()].filter(Boolean);
    const statusIndex = allStatuses.indexOf(status);
    const currentIndex = allStatuses.indexOf(currentStatus);
    return statusIndex <= currentIndex;
  };
  const getFinalStatus = () => {
    if (finalStatuses?.includes(currentStatus)) {
      return currentStatus;
    }
    return null;
  };

  const finalStatus = getFinalStatus();

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="relative">
        {mainStatuses?.map((status, index) => {
          const StatusIcon = getStatusInfo(
            status as Status | IStatusOrder,
          )?.icon;
          const active = isActive(status as Status);
          const isLast = index === mainStatuses.length - 1 && !finalStatus;

          return (
            <div key={status} className="flex items-start mb-8">
              <div className="relative flex items-center justify-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center
                  ${active ? getStatusInfo(status as Status)?.bg : 'bg-gray-100'}`}
                >
                  <StatusIcon
                    className={`w-5 h-5 
                    ${active ? getStatusInfo(status as Status)?.color : 'text-gray-400'}`}
                  />
                </div>
                {!isLast && (
                  <div
                    className={`absolute top-8 left-4 w-0.5 h-12 
                    ${active ? 'bg-blue-500' : 'bg-gray-200'}`}
                  />
                )}
              </div>
              <div className="ml-4 mt-1">
                <h3
                  className={`font-medium ${active ? 'text-gray-900' : 'text-gray-500'}`}
                >
                  {status}
                </h3>
              </div>
            </div>
          );
        })}

        {/* Single Final Status */}
        {finalStatus && (
          <div className="flex items-start">
            <div className="relative flex items-center justify-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center
                ${getStatusInfo(finalStatus as Status)?.bg}`}
              >
                {React.createElement(
                  getStatusInfo(finalStatus as Status)?.icon!,
                  {
                    className: `w-5 h-5 ${getStatusInfo(finalStatus as Status)?.color}`,
                  },
                )}
              </div>
            </div>
            <div className="ml-4 mt-1">
              <h3 className="font-medium text-gray-900">{finalStatus}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
