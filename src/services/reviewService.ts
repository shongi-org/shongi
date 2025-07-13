import { getAppointmentForReview } from "@/services/getAppointmentForReview";
import { config } from "@/config";

export interface AppointmentResponse {
  _id: string;
  agent: {
    _id: string;
    name: string;
  };
  service: {
    _id: string;
    name: string;
  };
  date: string;
}

export interface GetAppointmentResponse {
  success: boolean;
  data: {
    appointment: AppointmentResponse;
    hasReview: boolean;
    reviewId?: string;
  };
  message?: string;
}

export interface SubmitReviewRequest {
  appointment_id: string;
  rating: number;
  review: string;
  user_id?: string;  // Optional - will use appointment's user or "anonymous" on the backend
}

export interface ReviewData {
  _id: string;
  appointment_id: string;
  rating: number;
  review: string;
  user_id?: string;
}

export interface SubmitReviewResponse {
  success: boolean;
  data?: ReviewData;
  message?: string;
}

export const fetchAppointmentForReview = async (
  appointmentId: string
): Promise<GetAppointmentResponse> => {
  const response = await getAppointmentForReview(appointmentId);
  if (!response.ok) {
    throw new Error("Failed to fetch appointment details");
  }
  return await response.json();
};

export const submitReview = async (
  data: SubmitReviewRequest
): Promise<SubmitReviewResponse> => {
  const response = await fetch(`${config.backendURL}/api/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
  return await response.json();
};
