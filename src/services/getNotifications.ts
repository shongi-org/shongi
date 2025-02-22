import { config } from '@/config';

export const getNotifications = async () => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(`${config.backendURL}/api/notifications`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
    // body: JSON.stringify(cartItems),
  });
};

export const getNotificationsCount = async () => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(`${config.backendURL}/api/notifications/count`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
    // body: JSON.stringify(cartItems),
  });
};

export const popNotification = async (notification_id: string) => {
  const JWTToken = localStorage.getItem('token');
  return await fetch(
    `${config.backendURL}/api/notifications/pop/${notification_id}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: JWTToken as string,
      },
      // body: JSON.stringify(cartItems),
    },
  );
};
