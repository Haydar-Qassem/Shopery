import { StockStatusStyles } from "./styles";

function StockStatus({ variant }) {
  const status = variant === "inStock" ? "In Stock" : "Out of Stock";

  return <StockStatusStyles variant={variant}>{status}</StockStatusStyles>;
}

export default StockStatus;
