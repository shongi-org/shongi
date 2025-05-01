import { IAddress } from '@/interfaces/IAddress';
import { IAppointment } from '@/interfaces/IAppointment';
import { IMedicine } from '@/interfaces/IMedicine';

type IUnprocessedOrderItems = {
  items: {
    [key: string]: (IMedicine | IAppointment) & {
      quantity: number;
      type: 'appointment' | 'medicine';
    };
  };
};

export const changeOrderFormat = (
  unprocessedOrderItems: IUnprocessedOrderItems,
  address: IAddress,
) => {
  const result = {
    medicine: [] as { medicine_id: string; quantity: number }[],
    appointment: [] as {
      time_frame: { start_time: string; end_time: string };
      issue_id: string;
      address: {
        detail: string;
        lat: number;
        long: number;
      };
    }[],
    address: address,
  };

  // 2022-12-16T02:33:24Z
  // date.toISOString().split('T')[0]

  return result;
};
