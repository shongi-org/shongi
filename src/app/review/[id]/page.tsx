import { Metadata } from "next";
import ReviewForm from "./ReviewForm";

export const metadata: Metadata = {
  title: "Submit Review | Shongi",
};

export default function ReviewPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Your Feedback Matters</h1>
      <ReviewForm appointmentId={params.id} />
    </div>
  );
}
