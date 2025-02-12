import { config } from '@/config';

export const uploadProfilePic = async (profilePicture: string) => {
  const JWTToken = localStorage.getItem('token');
  console.log(profilePicture);
  return await fetch(`${config.backendURL}/api/users`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: JWTToken as string,
    },
    body: JSON.stringify({ profile_picture: profilePicture }),
  });
};
