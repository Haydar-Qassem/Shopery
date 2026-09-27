import { HiOutlineShoppingBag } from "react-icons/hi2";
import PriceAmount from "../PriceAmount";
import ProductRating from "../ProductRating";
import { ImageBox, ContentBox, HorizontalCardContainer, HoverActions, ActionButton } from "./styles";
// Example using react-icons. Replace with your own SVGs if needed.
import { FiShoppingBag, FiEye, FiHeart } from "react-icons/fi";

function HorizontalCard({ product }) {
  return (
    <HorizontalCardContainer>
      <ImageBox>
        <img src={product?.image} alt="product image" />
      </ImageBox>
      <ContentBox product={product}>
        <h4>{product?.name}</h4>
        
        <div className="default-info">
          <PriceAmount price={product?.price} oldPrice={product?.oldPrice} />
          <ProductRating rating={product?.rating} />
        </div>

        <HoverActions className="hover-actions">
          <ActionButton className="cart-btn">
            <HiOutlineShoppingBag />
          </ActionButton>
          <ActionButton>
            <FiEye />
          </ActionButton>
          <ActionButton>
            <FiHeart />
          </ActionButton>
        </HoverActions>
      </ContentBox>
    </HorizontalCardContainer>
  );
}

export default HorizontalCard;