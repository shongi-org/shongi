import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  maxStars?: number;
  initialRating?: number;
  onRatingSelect?: (rating: number) => void;
  readOnly?: boolean;
}

const StarRating = ({
  maxStars = 5,
  initialRating = 0,
  onRatingSelect = () => {},
  readOnly = false,
}: StarRatingProps) => {
  const [currentRating, setCurrentRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (rating: number) => {
    if (!readOnly) {
      setCurrentRating(rating);
      onRatingSelect(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    if (!readOnly) {
      setHoverRating(rating);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(0);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={starValue}
            className={`cursor-pointer text-2xl ${
              (hoverRating || currentRating) >= starValue
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
