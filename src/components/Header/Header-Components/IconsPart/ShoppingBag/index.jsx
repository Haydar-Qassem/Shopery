import { useSelector } from "react-redux";
import shoppingBag from "../../../../../assets/images/ShoppingBag.svg";
import { selectUser } from "../../../../../store/auth/authSelectors";
import PriceAmount from "../../../../common/PriceAmount";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { path } from "../../../../../Constants/Paths";
import ShoppingCartPopup from "../../ShoppingCartPopup";
import { useState } from "react";
import { selectCart } from "../../../../../store/ShoppingCart/cartSelectors";

function ShoppingBag() {
  const user = useSelector(selectUser);
  const [cartOpen, setCartOpen] = useState(false);

  const cart = useSelector(selectCart);
  const items = cart?.items || [];

  const subtotal =
    items.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  return (
    <>
      <button
        onClick={() => setCartOpen(true)}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: "transparent",
        }}
      >
        <HiOutlineShoppingBag
          style={{
            width: "30px",
            height: "30px",
          }}
        />
        {!user && (
          <span style={{ marginInlineStart: "12px" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "7px" }}
            >
              <span
                style={{
                  color: "var(--gray-7)",
                  fontSize: "11px",
                  fontWeight: "400",
                  lineHeight: "120%",
                }}
              >
                Shopping cart:
              </span>
              <PriceAmount
                price={subtotal}
                size="small"
                style={{ lineHeight: "100%" }}
              />
            </div>
          </span>
        )}
      </button>
      <ShoppingCartPopup isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default ShoppingBag;
