import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  maxRating?: number;
  onRatingSelect?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  maxRating = 5,
  onRatingSelect,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (value: number) => {
    setRating(value);
    if (onRatingSelect) onRatingSelect(value);
  };

  return (
    <div className="star-rating flex">
      {[...Array(maxRating)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
              style={{ display: 'none' }}
            />
            <FaStar
              size={30}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              style={{ cursor: 'pointer' }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
