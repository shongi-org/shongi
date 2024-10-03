import { IOrderItem } from './IOrderItem';

export type ICart = {
  orderItems: IOrderItem[];
  deliveryFee: number;
  cartTotal?: number;
  total?: number;
};
