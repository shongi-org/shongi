export type INotificationBody = {
  id: string;
  message: string;
  type: 'appointment update';
  payload: {
    id: string;
  };
  createdAt: Date;
  seen: boolean;
};
