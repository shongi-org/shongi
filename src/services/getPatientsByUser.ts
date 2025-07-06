/**
 * Service to fetch patients for the logged-in user
 */

import { config } from '@/config';
import { IPatient } from '@/interfaces/IPatient';

interface IPatientResponse {
  success: boolean;
  data: IPatient[];
  count: number;
  message?: string;
}

export const getPatientsByUser = async (): Promise<IPatient[]> => {
  try {
    const JWTToken = localStorage.getItem('token');
    
    if (!JWTToken) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${config.backendURL}/api/patients/by-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': JWTToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch patients: ${response.status}`);
    }

    const result: IPatientResponse = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to fetch patients');
    }

    return result.data;
  } catch (error) {
    console.error('getPatientsByUser error:', error);
    throw error;
  }
};
