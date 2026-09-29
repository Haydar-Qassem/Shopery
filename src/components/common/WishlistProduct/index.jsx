import { WishlistProductStyles, ProductCell } from "./styles";
import PriceAmount from "../PriceAmount";
import StockStatus from "../StockStatus";
import Button from "../Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import CloseButton from "../CloseButton";

function WishlistProduct({ product }) {
  return (
    <WishlistProductStyles>
      <ProductCell>
        <img src={product.image} alt={product.name} />
        <span>{product.name}</span>
      </ProductCell>
      {/* <PriceCell></PriceCell> */}
      <PriceAmount
        price={product.price}
        oldPrice={product.oldPrice}
        size="medium"
      />
      {/* <StockStatusCell></StockStatusCell> */}
      <StockStatus variant={product.stockStatus} />
      {/* <ButtonCell></ButtonCell> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Button
          size="medium"
          variant="fill"
          disabled={product.stockStatus === "outOfStock"}
        >
          Add to Cart
        </Button>
        <span>
          <CloseButton variant="outline" />
        </span>
      </div>
    </WishlistProductStyles>
  );
}

export default WishlistProduct;
