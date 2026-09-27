import { FiHeart, FiEye } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import ProductRating from "../ProductRating";
import Countdown from "react-countdown";
import {
  CardStyles,
  ImageWrapper,
  InfoWrapper,
  ActionSection,
  HurryUp,
} from "./styles";
import Tag from "../Tag";
import PriceAmount from "../PriceAmount";
import { PiHeart, PiHeartLight } from "react-icons/pi";
import CountDownSection from "./CountDownSection";
// import Button from "../Button";

function BigProductCard({ product }) {
  return (
    <CardStyles>
      <ImageWrapper img={product.image}>
        <div className="tags-container">
          {product.Tags &&
            product.Tags.map((tag, index) => (
              <Tag key={index} variant={tag.tagType}>
                {tag.tagText}
              </Tag>
            ))}
        </div>

        {/* <img src={product.image} alt={product.name} /> */}

        {/* <HoverActions className="hover-actions">
        </HoverActions> */}
        <ActionSection>
          <button className="icon-button">
            <PiHeart />
          </button>
          <button className="cart-button">
            <span>{"Add to Cart"}</span>
            <HiOutlineShoppingBag />
          </button>
          <button className="icon-button">
            <FiEye />
          </button>
        </ActionSection>
      </ImageWrapper>
      <InfoWrapper>
        <h4>{product.name}</h4>

        <PriceAmount
          price={product.price}
          oldPrice={product.oldPrice}
          size="xxl"
        />

        <ProductRating
          rating={product.rating}
          reviewsCount={product.reviewsCount}
        />
      </InfoWrapper>

      <CountDownSection targetDate={product.OfferExpDate} />
    </CardStyles>
  );
}

export default BigProductCard;
