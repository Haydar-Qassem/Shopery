import { FiHeart, FiEye } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import ProductRating from "../ProductRating";
import {
  CardStyles,
  ImageWrapper,
  HoverActions,
  ContentWrapper,
  CartButton,
} from "./styles";
import Tag from "../Tag";
import PriceAmount from "../PriceAmount";
import { PiHeart, PiHeartLight } from "react-icons/pi";

function ProductCard({ product, variant = "medium-sharp" }) {
  return (
    <CardStyles variant={variant}>
      <ImageWrapper variant={variant}>
        <div className="tags-container">
          {product.Tags &&
            product.Tags.map((tag, index) => (
              <Tag key={index} variant={tag.tagType}>
                {tag.tagText}
              </Tag>
            ))}
        </div>

        <img src={product.image} alt={product.name} />

        <HoverActions className="hover-actions">
          <button>
            <PiHeart />
          </button>
          <button>
            <FiEye />
          </button>
        </HoverActions>
      </ImageWrapper>

      <ContentWrapper variant={variant}>
        <div className="product-info">
          <div>
            <h4>{product.name}</h4>
            <PriceAmount
              price={product.price}
              oldPrice={product.oldPrice}
              size="medium"
            />
          </div>
          <div className="rating-container">
            <ProductRating rating={product.rating} size="10" />
          </div>
        </div>

        <CartButton>
          <HiOutlineShoppingBag />
        </CartButton>
      </ContentWrapper>
    </CardStyles>
  );
}

export default ProductCard;
