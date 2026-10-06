import { PiHeartBold } from "react-icons/pi";
import SocialMediaList from "../../Footer/FooterComponents/SocialMediaList";
import Button from "../Button";
import PriceAmount from "../PriceAmount";
import ProductRating from "../ProductRating";
import QuantityCounter from "../QuantityCounter";
import StockStatus from "../StockStatus";
import {
  ActionRow,
  FeatureList,
  ModalDetails,
  ModalGallery,
  ProductDetailsCardStyles,
  ThumbnailList,
} from "./styles";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../../store/ShoppingCart/cartSlice";
import { FaCheckCircle } from "react-icons/fa";

function ProductDetailsCard({ product }) {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  return (
    <ProductDetailsCardStyles>
      <ModalGallery>
        <ThumbnailList>
          {(product.gallery || [product.image]).map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={selectedImage === img ? "active" : ""}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </ThumbnailList>
        <div className="main-image">
          <img src={selectedImage} alt={product.name} />
        </div>
      </ModalGallery>

      <ModalDetails>
        <div className="overview-row">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <h2>{product.name}</h2>
            <StockStatus variant={product.stockStatus} />
          </div>
          <div>
            <ProductRating
              rating={product.rating}
              reviewsCount={product.reviewsCount}
            />
            <span>SKU: {product.SKU}</span>
          </div>

          <div>
            <PriceAmount price={product.price} size="large" />
            {product.oldPrice && (
              <span className="old-price">${product.oldPrice}</span>
            )}
          </div>
        </div>
        <div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                Brand: <img src={product.brandImage} alt={product.brand} />
              </div>
              <div>
                Share Item: <SocialMediaList />
              </div>
            </div>
          </div>
          {/* {product?.description?.map((block, index) => {
            if (block?.type === "paragraph") {
              return <p key={index}>{block?.content}</p>;
            }
            if (block?.type === "list") {
              return (
                <FeatureList key={index}>
                  {block?.items.map((item, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </FeatureList>
              );
            }
            return null;
          })} */}
          <p className="description">{product.shortDescription}</p>
        </div>

        <ActionRow>
          <QuantityCounter
            quantity={quantity}
            onIncrement={() => setQuantity((prev) => prev + 1)}
            onDecrement={() => setQuantity((prev) => Math.max(1, prev - 1))}
          />
          <Button
            variant="fill"
            size="large"
            onClick={handleAddToCart}
            style={{ flex: 1 }}
          >
            Add to Cart
          </Button>
          <Button
            variant="ghost"
            size="large"
            style={{
              padding: 16,
            }}
          >
            {/* <GoHeart /> */}
            <PiHeartBold size={24} />
          </Button>
        </ActionRow>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "21px",
            // flex: 1,
            font: "var(--body-small-400)",
            color: "var(--gray-5)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ color: "var(--gray-9)", fontWeight: "500" }}>
              Category:
            </span>
            <span>{product.category}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ color: "var(--gray-9)", fontWeight: "500" }}>
              Tag:
            </span>
            {product.metaTags && product.metaTags.length > 0 ? (
              product.metaTags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))
            ) : (
              <span>No tags available</span>
            )}
          </div>
        </div>
      </ModalDetails>
    </ProductDetailsCardStyles>
  );
}

export default ProductDetailsCard;
