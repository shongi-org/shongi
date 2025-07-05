export type IPastAppointment = {
  time_frame: {
    start_time: string;
    end_time: string;
  };
  _id: string;
  status: string;
  date: Date;
  agent?: string;
  home_address: string;
  hospital_address: string;
  preferred_agent_gender: string;
  transport_mode: string;
  contact_info: string;
  additional_details: string;
  payment_option: string;
  payment_method: string;
};
