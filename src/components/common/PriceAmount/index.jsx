import { PriceAmountStyles } from "./styles";

function PriceAmount({ price, oldPrice, style, size }) {
  return (
    <PriceAmountStyles $size={size} style={style}>
      ${price.toFixed(2)}
      {oldPrice && (
        <span
          style={{
            marginInlineStart: "4px",
            color: "var(--gray-4)",
            textDecoration: "line-through",
          }}
        >
          ${oldPrice.toFixed(2)}
        </span>
      )}
    </PriceAmountStyles>
  );
}

export default PriceAmount;
