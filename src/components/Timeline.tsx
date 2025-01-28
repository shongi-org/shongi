/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React from 'react';
import { Check, Clock, X, AlertCircle } from 'lucide-react';

export type Status =
  | 'Pending'
  | 'Fixed Provider and Time'
  | 'Service Provider Reached'
  | 'Patient Served'
  | 'Provider Declined'
  | 'Client Declined';

interface TimelineProps {
  currentStatus: Status;
}

const Timeline: React.FC<TimelineProps> = ({
  currentStatus = 'Client Declined',
}) => {
  const getStatusInfo = (status: Status) => {
    switch (status) {
      case 'Pending':
        return { icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-100' };
      case 'Fixed Provider and Time':
        return { icon: Check, color: 'text-blue-500', bg: 'bg-blue-100' };
      case 'Service Provider Reached':
        return { icon: Check, color: 'text-blue-500', bg: 'bg-blue-100' };
      case 'Patient Served':
        return { icon: Check, color: 'text-green-500', bg: 'bg-green-100' };
      case 'Provider Declined':
        return { icon: X, color: 'text-red-500', bg: 'bg-red-100' };
      case 'Client Declined':
        return { icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-100' };
    }
  };

  const mainStatuses = [
    'Pending',
    'Fixed Provider and Time',
    'Service Provider Reached',
  ];

  const getFinalStatus = () => {
    if (
      ['Patient Served', 'Provider Declined', 'Client Declined'].includes(
        currentStatus,
      )
    ) {
      return currentStatus;
    }
    return null;
  };

  const isActive = (status: Status) => {
    const allStatuses = [...mainStatuses, getFinalStatus()].filter(Boolean);
    const statusIndex = allStatuses.indexOf(status);
    const currentIndex = allStatuses.indexOf(currentStatus);
    return statusIndex <= currentIndex;
  };

  const finalStatus = getFinalStatus();

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="relative">
        {mainStatuses.map((status, index) => {
          const StatusIcon = getStatusInfo(status as Status)?.icon;
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
