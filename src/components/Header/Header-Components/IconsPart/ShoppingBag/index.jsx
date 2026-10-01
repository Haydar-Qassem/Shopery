import { useSelector } from "react-redux";
import shoppingBag from "../../../../../assets/images/ShoppingBag.svg";
import { selectUser } from "../../../../../store/auth/authSelectors";
import PriceAmount from "../../../../common/PriceAmount";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { path } from "../../../../../Constants/Paths";

function ShoppingBag() {
  const user = useSelector(selectUser);

  return (
    <a
      href={path.cart}
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
      <HiOutlineShoppingBag
        style={{
          width: "30px",
          height: "30px",
        }}
      />
      {!user && (
        <span style={{ marginInlineStart: "12px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
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
              price={57.0}
              size="small"
              style={{ lineHeight: "100%" }}
            />
          </div>
        </span>
      )}
    </a>
  );
}

export default ShoppingBag;
