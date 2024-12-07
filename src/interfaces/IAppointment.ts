export type IAppointment = {
  id: string;
  time_frame: {
    date: string;
    start_time: string;
    end_time: string;
  };
  price: number;
  image?: string;
  service_name?: string;
  address?: {
    detail: string;
    lat: number;
    long: number;
  };
};
