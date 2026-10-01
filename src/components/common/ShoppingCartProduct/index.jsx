import { useEffect, useState } from "react";
import CloseButton from "../CloseButton";
import PriceAmount from "../PriceAmount";
import QuantityCounter from "../QuantityCounter";
import { ProductCell, ShoppingCartProductStyles } from "./styles";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../../store/ShoppingCart/cartSlice";

function ShoppingCartProduct({ product, quantity, onQuantityChange }) {
  // const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product.id));
  };

  const handleUpdateQuantity = (newQuantity) => {
    dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
  };

  // useEffect(() => {
  //   handleUpdateQuantity(quantity);
  // }, [quantity]);

  return (
    <ShoppingCartProductStyles>
      <ProductCell>
        <img src={product.image} alt={product.name} />
        <span>{product.name}</span>
      </ProductCell>
      <PriceAmount
        price={product.price}
        // oldPrice={product.oldPrice}
        size="medium"
      />

      {/* quantity counter */}
      <QuantityCounter
        quantity={quantity}
        onIncrement={() => onQuantityChange(product.id, quantity + 1)}
        onDecrement={() => onQuantityChange(product.id, quantity - 1)}
      />
      <PriceAmount
        price={product.price * quantity}
        // oldPrice={product.oldPrice}
        size="medium"
        style={{ fontWeight: "500" }}
      />

      <span>
        <CloseButton variant="outline" onClick={handleRemoveProduct} />
      </span>
    </ShoppingCartProductStyles>
  );
}

export default ShoppingCartProduct;
