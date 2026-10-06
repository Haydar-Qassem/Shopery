import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/ShoppingCart/cartSlice";
import CloseButton from "../CloseButton";
import QuantityCounter from "../QuantityCounter";
import PriceAmount from "../PriceAmount";
import Button from "../Button";
import {
  ModalBackdrop,
  ModalCard,
  ModalGallery,
  ThumbnailList,
  ModalDetails,
  ActionRow,
  FeatureList,
} from "./styles";
import SocialMediaList from "../../Footer/FooterComponents/SocialMediaList";
import { GoHeart } from "react-icons/go";
import { BsHeart } from "react-icons/bs";
import { PiHeartBold } from "react-icons/pi";
import StockStatus from "../StockStatus";
import ProductRating from "../ProductRating";
import { FaCheckCircle } from "react-icons/fa";

export default function ProductQuickView({ product, isOpen, onClose }) {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);

  // Sync state when product opens and close on Escape key
  useEffect(() => {
    if (product) setSelectedImage(product.image);
    setQuantity(1);

    const handleKeyDown = (e) => e.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [product, isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    onClose();
  };

  return createPortal(
    <ModalBackdrop onClick={onClose}>
      {/* stopPropagation prevents clicking inside the card from closing it */}
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <CloseButton
          className="modal-close"
          onClick={onClose}
          variant="transparent"
        />

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
              onClick={onClose}
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
      </ModalCard>
    </ModalBackdrop>,
    document.body,
  );
}
