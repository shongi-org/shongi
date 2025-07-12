export enum gender {
  male = 'Male',
  female = 'Female',
  other = 'Other',
}

interface IZone {
  _id: string;
  name: string;
  details: string;
  __v?: number;
}

export type IAgent = {
  _id?: string;
  phone: string;
  name: string;
  gender: gender;
  dob: Date;
  nid: string;
  profile_picture: string;
  // zone: string;
  zone?: IZone;
  user: string;
  hasInterest?: boolean;
  serial_no?: number;
};

export type IProcessedAgent = {
  name: string;
  gender: string;
  dob: Date;
  nid: string;
  profile_picture: string;
  zone: string;
};

export type IProcessedSchedules = {
  day: string;
  timeslot: string;
}[];
