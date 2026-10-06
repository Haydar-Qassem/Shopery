import { CiUser } from "react-icons/ci";
import ProductRating from "../ProductRating";
import {
  ImgContainer,
  CustomerFeedbackStyles,
  FeedbackHeader,
  ReviewText,
  Timestamp,
} from "./styles";

function CustomerFeedback({ review }) {
  return (
    <CustomerFeedbackStyles key={review.id}>
      <FeedbackHeader>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ImgContainer>
            {review.profileImage ? (
              <img src={review.profileImage} alt="User profile" />
            ) : (
              <CiUser />
            )}
          </ImgContainer>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong style={{ font: "var(--body-small-500)" }}>
              {review.name}
            </strong>
            <ProductRating rating={review.rating} />
          </div>
        </div>
        <Timestamp>{review.time}</Timestamp>
      </FeedbackHeader>
      <ReviewText>{review.text}</ReviewText>
    </CustomerFeedbackStyles>
  );
}

export default CustomerFeedback;
