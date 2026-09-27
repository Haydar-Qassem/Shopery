import { FaStar, FaRegStar } from "react-icons/fa";
import { RatingStyles } from "./styles";

function ProductRating({ rating = 0, reviewsCount, size }) {
  const totalStars = 5;

  return (
    <RatingStyles>
      <div className="stars">
        {[...Array(totalStars)].map((_, index) => {
          return index < Math.round(rating) ? (
            <FaStar key={index} className="filled" size={size} />
          ) : (
            <FaRegStar key={index} className="empty" size={size} />
          );
        })}
      </div>

      {reviewsCount !== undefined && (
        <span className="review-count">({reviewsCount} Feedbacks)</span>
      )}
    </RatingStyles>
  );
}

export default ProductRating;
