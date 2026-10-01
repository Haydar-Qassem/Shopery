import ShoppingCartProduct from "../../components/common/ShoppingCartProduct";
import { CartTotal, CouponDiv, ShoppingCartPageStyles } from "./styles";
import { products } from "../../MockData/Products";
import { myCart } from "../../MockData/TemporaryShoppingCartData";
import AppTemplate from "../../components/AppTemplate";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import ShoppingCartTable from "../../components/common/ShoppingCartTable";
import Button from "../../components/common/Button";
import PriceAmount from "../../components/common/PriceAmount";
import { selectCart } from "../../store/ShoppingCart/cartSelectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateCart } from "../../store/ShoppingCart/cartSlice";
import { Navigate, useNavigate } from "react-router-dom";

function ShoppingCartPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const items = cart?.items || [];

  const [draftQuantities, setDraftQuantities] = useState({});

  useEffect(() => {
    const initial = {};
    items.forEach((item) => {
      initial[item.id] = item.quantity;
    });
    setDraftQuantities(initial);
  }, [items]);

  const handleQuantityChange = (id, newQty) => {
    if (newQty < 1) return;
    setDraftQuantities((prev) => ({
      ...prev,
      [id]: newQty,
    }));
  };

  const handleUpdateCart = () => {
    if (!hasChanges) return;

    const payload = Object.entries(draftQuantities).map(([id, quantity]) => ({
      id,
      quantity,
    }));
    dispatch(updateCart(payload));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = "Free";
  const shippingCost = shipping === "Free" ? 0 : 10.99;

  const hasChanges = items.some(
    (item) =>
      draftQuantities[item.id] !== undefined &&
      draftQuantities[item.id] !== item.quantity,
  );

  return (
    <AppTemplate
      pageTitle="Shopping Cart"
      pageDescription="Shopping Cart Meta Description"
      path={path.cart}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Shopping Cart Meta Description",
      }}
    >
      <MyBreadcrumb />
      <ShoppingCartPageStyles className="container">
        <h2>My Shopping Cart</h2>
        <div>
          <ShoppingCartTable
            products={cart.items}
            draftQuantities={draftQuantities}
            onQuantityChange={handleQuantityChange}
            onUpdateCart={handleUpdateCart}
            hasChanges={hasChanges}
          />
          <CartTotal>
            <h3>Cart Total</h3>
            <div>
              <div>
                Subtotal:
                <PriceAmount
                  price={subtotal}
                  style={{
                    font: "var(--body-small-500)",
                    color: "var(--gray-9)",
                  }}
                />
              </div>
              <div>
                Shipping:{" "}
                <span
                  style={{
                    font: "var(--body-small-500)",
                    color: "var(--gray-9)",
                  }}
                >
                  {shipping === "Free" ? (
                    shipping
                  ) : (
                    <PriceAmount price={shippingCost} />
                  )}
                </span>
              </div>
              <div>
                Total:{" "}
                <PriceAmount
                  price={subtotal + shippingCost}
                  style={{
                    font: "var(--body-medium-600)",
                    color: "var(--gray-9)",
                  }}
                />
              </div>
            </div>
            <Button
              variant="fill"
              size="large"
              onClick={() => navigate(path.checkout)}
            >
              Proceed to Checkout
            </Button>
          </CartTotal>
          <CouponDiv>
            <span>Coupon Code</span>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Enter code" />
              <button type="submit">Apply Coupon</button>
            </form>
          </CouponDiv>
        </div>
      </ShoppingCartPageStyles>
    </AppTemplate>
  );
}

export default ShoppingCartPage;
