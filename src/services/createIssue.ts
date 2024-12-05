import { config } from '@/config';
import { IIssue } from '@/interfaces/IIssue';

export const createIssue = async (issue: IIssue) => {
  return await fetch(`${config.backendURL}/api/issue/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: issue.token,
    },
    body: JSON.stringify(issue),
  });
};
