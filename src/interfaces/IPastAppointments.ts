export type IPastAppointment = {
  time_frame: {
    start_time: string;
    end_time: string;
  };
  _id: string;
  status: string;
  issue_id: {
    service_id: {
      name: string;
      sub_category: {
        name: string;
      };
    };
  };
};
