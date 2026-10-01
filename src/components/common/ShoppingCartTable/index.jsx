import Button from "../Button";
import ShoppingCartProduct from "../ShoppingCartProduct";
import {
  FooterRow,
  HeaderRow,
  ShoppingCartTableStyles,
  TableBody,
} from "./styles";

function ShoppingCartTable({
  products,
  draftQuantities,
  onQuantityChange,
  onUpdateCart,
  hasChanges,
}) {
  return (
    <ShoppingCartTableStyles>
      <HeaderRow>
        <span>PRODUCT</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
        <span>SUBTOTAL</span>
      </HeaderRow>
      <TableBody>
        {products.map((product) => (
          <div style={{ width: "100%" }} key={product.id}>
            <ShoppingCartProduct
              key={product.id}
              product={product}
              quantity={draftQuantities[product.id] ?? product.quantity}
              onQuantityChange={onQuantityChange}
            />
          </div>
        ))}
      </TableBody>
      <FooterRow>
        {/* My idea:
         - when there is no update to the cart --> Update button is disabled
         - when there is an update to the cart --> Update button is enabled
         - when it is clicked --> update the cart then disable th e button */}
        <Button variant="fill-gray" size="medium">
          Return to shop
        </Button>
        <Button
          variant="ghost"
          size="medium"
          onClick={onUpdateCart}
          disabled={!hasChanges}
        >
          Update Cart
        </Button>
      </FooterRow>
    </ShoppingCartTableStyles>
  );
}

export default ShoppingCartTable;
