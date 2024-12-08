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
  Object.values(unprocessedOrderItems.items).forEach((orderItem) => {
    if (orderItem.type === 'medicine') {
      result[orderItem.type].push({
        medicine_id: orderItem.id,
        quantity: orderItem.quantity,
      });
    }
    // 2022-12-16T02:33:24Z
    // date.toISOString().split('T')[0]

    if (orderItem.type === 'appointment') {
      result[orderItem.type].push({
        time_frame: {
          start_time: `${new Date((orderItem as IAppointment).time_frame.date).toISOString().split('T')[0]}T${(orderItem as IAppointment).time_frame.start_time}:00Z`,
          end_time: `${new Date((orderItem as IAppointment).time_frame.date).toISOString().split('T')[0]}T${(orderItem as IAppointment).time_frame.end_time}:00Z`,
        },
        issue_id: (orderItem as IAppointment).id,
        address: address,
      });
    }
  });
  return result;
};
