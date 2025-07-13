"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import Link from "next/link";
import { fetchAppointmentForReview, submitReview } from "@/services/reviewService";

interface Appointment {
  _id: string;
  agent: {
    _id: string;
    name: string;
  };
  service: {
    _id: string;
    name: string;
  };
  user?: {
    _id: string;
    name?: string;
  };
  date: string;
}

export default function ReviewForm({ appointmentId }: { appointmentId: string }) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [hasReview, setHasReview] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  
  const router = useRouter();
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        setLoading(true);
        const data = await fetchAppointmentForReview(appointmentId);
        
        if (data.success) {
          setAppointment(data.data.appointment);
          setHasReview(data.data.hasReview);
          
          if (data.data.hasReview) {
            router.push('/review/thank-you?existing=true');
          }
        } else {
          setError(data.message || "Failed to fetch appointment details");
        }
      } catch (err) {
        setError("Error fetching appointment details. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAppointment();
  }, [appointmentId]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      setError("Please select a rating");
      return;
    }
    
    try {
      setSubmitting(true);
      setError(null);
      
      const data = await submitReview({
        appointment_id: appointmentId,
        rating,
        review,
        // No user_id needed - backend will use appointment.user or mark as anonymous
      });
      
      if (data.success) {
        router.push('/review/thank-you');
      } else {
        setError(data.message || "Failed to submit review");
      }
    } catch (err) {
      setError("Error submitting review. Please try again later.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };
  
  const renderStars = () => {
    const stars = [];
    const activeRating = hoverRating || rating;
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          className="focus:outline-none"
          onMouseEnter={() => setHoverRating(i)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => setRating(i)}
        >
          <Star 
            size={32} 
            className={`${i <= activeRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} transition-colors`} 
          />
        </button>
      );
    }
    
    return stars;
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (error && !appointment) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 mb-4">{error}</div>
        <Link href="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }
    
  if (hasReview) {
    router.push('/review/thank-you?existing=true');
    return null;
  }
  
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      {appointment && (
        <div className="mb-6">
          <h2 className="text-lg font-medium">Appointment Details</h2>
          <div className="mt-2 text-gray-600">
            <p><span className="font-medium">Service:</span> {appointment.service?.name}</p>
            <p><span className="font-medium">Agent:</span> {appointment.agent?.name}</p>
            <p><span className="font-medium">Date:</span> {new Date(appointment.date).toLocaleDateString()}</p>
          </div>
        </div>
      )}
      
      {/* Only show the form if we're client-side */}
      {isClient ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Rate your experience</label>
            <div className="flex space-x-1">
              {renderStars()}
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="review" className="block text-gray-700 mb-2 font-medium">
              Your Feedback (Optional)
            </label>
            <textarea
              id="review"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Tell us about your experience..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          
          {error && (
            <div className="mb-4 text-red-500">{error}</div>
          )}
          
          <button
            type="submit"
            disabled={submitting || rating === 0}
            className={`w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors ${
              submitting || rating === 0 ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      ) : (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
}
