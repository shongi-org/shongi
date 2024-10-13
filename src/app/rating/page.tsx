'use client';
import Button from '@/components/Button';
import StarRating from '@/components/StarRating';
import { useState } from 'react';

const questions = [
  {
    id: 1,
    tag: 'professionalism',
    question: 'How professional was the service provider?',
  },
  {
    id: 2,
    tag: 'communication',
    question: 'How would you rate their communication skills?',
  },
  {
    id: 3,
    tag: 'empathy',
    question: 'How empathetic were they during the service?',
  },
  {
    id: 4,
    tag: 'serviceEffectiveness',
    question: 'How effective was the service they provided?',
  },
];

const RatingPage = () => {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({
    professionalism: 0,
    communication: 0,
    empathy: 0,
    serviceEffectiveness: 0,
  });

  const handleRatingSelect = (tag: string, rating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [tag]: rating,
    }));
  };

  return (
    <div className="max-w-md mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        Rate the Service
      </h1>

      {questions.map((q) => (
        <div key={q.id} className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl mb-1 sm:mb-2">
            {q.id}. {q.question}
          </h2>
          <StarRating
            onRatingSelect={(rating) => handleRatingSelect(q.tag, rating)}
          />
        </div>
      ))}

      <Button type='submit' variant='primary' size='block'
        onClick={() => console.log('Selected Ratings:', ratings)}
      >
        Submit Ratings
      </Button>
    </div>
  );
};

export default RatingPage;
