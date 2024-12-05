import { config } from '@/config';
import { IUser } from '@/interfaces/IUser';

export const createUser = async (user: IUser) => {
  return await fetch(`${config.backendURL}/api/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};
