import { IAddress } from './IAddress';

export type ICartItems = {
  medicine: { medicine_id: string; quantity: number }[];
  appointment: {
    time_frame: { start_time: string; end_time: string };
    issue_id: string;
  }[];

  address: IAddress;
};
