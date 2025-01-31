// import { IOrderItem } from './IOrderItem';

export type IIssue = {
  token: string;
  for_someone: boolean;
  service_id: string;
  assets: string[];
};

export type IIssueDetails = {
  _id: string;
  service_id: {
    _id: string;
    name: string;
  };
  assets: string[];
  __v?: number;
};
