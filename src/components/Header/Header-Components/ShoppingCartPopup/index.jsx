import {
  CartFooter,
  CartHeader,
  CartItems,
  CheckoutButton,
  Drawer,
  GoToCartButton,
  Overlay,
} from "./styles";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import CloseButton from "../../../common/CloseButton";
import Button from "../../../common/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../../../store/ShoppingCart/cartSelectors";
import { removeFromCart } from "../../../../store/ShoppingCart/cartSlice";
import { path } from "../../../../Constants/Paths";
import PriceAmount from "../../../common/PriceAmount";

const PopupProductItem = ({ product, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <span>
          {product.quantity} x{" "}
          <PriceAmount price={product.price} size="small" />
        </span>
      </div>
      <CloseButton variant="outline" onClick={() => onRemove(product)} />
    </div>
  );
};

function ShoppingCartPopup({ isOpen, onClose }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const items = cart?.items || [];

  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product.id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <Drawer
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <CartHeader>
              <h3>Shopping Card ({items.length})</h3>

              <CloseButton variant="transparent" onClick={onClose} />
            </CartHeader>

            <CartItems>
              {cart.items?.map((item) => (
                <PopupProductItem
                  product={item}
                  onRemove={handleRemoveProduct}
                />
              ))}
              {/* <div className="cart-item">
                <img src="/orange.png" alt="Fresh Indian Orange" />
                <div>
                  <p>Fresh Indian Orange</p>
                  <span>1 kg x $12.00</span>
                </div>
                <CloseButton variant="outline" onClick={() => {}} />
              </div> */}
            </CartItems>

            <CartFooter>
              <div className="total-row">
                <span>
                  {items.length} Product{items.length !== 1 ? "s" : ""}
                </span>
                <PriceAmount
                  price={subtotal}
                  size="medium"
                  style={{ fontWeight: "600" }}
                />
              </div>
              <Button
                variant="fill"
                size="large"
                onClick={() => navigate(path.checkout)}
              >
                Checkout
              </Button>
              <Button
                variant="ghost"
                size="large"
                onClick={() => navigate(path.cart)}
              >
                Go To Cart
              </Button>
              {/* <CheckoutButton>Checkout</CheckoutButton>
              <GoToCartButton>Go To Cart</GoToCartButton> */}
            </CartFooter>
          </Drawer>
        </>
      )}
    </AnimatePresence>
  );
}

export default ShoppingCartPopup;
