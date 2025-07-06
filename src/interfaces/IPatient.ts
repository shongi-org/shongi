export interface IPatient {
  _id: string;
  name: string;
  gender: 'male' | 'female' | 'other';
  dob: string; // ISO date string from backend
}

export interface IPatientFormData {
  name: string;
  gender: string;
  dob: Date;
}
