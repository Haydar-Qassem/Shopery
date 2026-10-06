import { IconsPartStyles } from "./styles.js";
import heart from "../../../../assets/images/heart.svg";
import ShoppingBag from "./ShoppingBag/index.jsx";
import { selectUser } from "../../../../store/auth/authSelectors.js";
import { useSelector } from "react-redux";
import divider from "../../../../assets/images/Devider.svg";
import UserProfileIcon from "../../../../assets/images/UserProfileIcon.jsx";
import { PiHeartLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { path } from "../../../../Constants/Paths.js";
import ShoppingCartPopup from "../ShoppingCartPopup/index.jsx";

function IconsPart({ withSearch, variant }) {
  const addtoWishlist = () => {};
  const user = useSelector(selectUser);

  return (
    <IconsPartStyles
      style={{
        gap: user ? "24px" : "16px",
        color: variant === "box-layout" ? "var(--white)" : "var(--gray-9)",
      }}
      variant={variant}
    >
      {withSearch && (
        <CiSearch
          style={{
            width: "30px",
            height: "30px",
            transform: "scale(1)",
            transformOrigin: "center",
          }}
        />
      )}
      <a href={path.wishlist} style={{ cursor: "pointer" }}>
        <PiHeartLight
          style={{
            width: "30px",
            height: "30px",
            transform: "scale(1)",
            transformOrigin: "center",
          }}
        />
        {/* <img src={heart} alt="wishlist" /> */}
      </a>
      {!user && (
        <img
          src={divider}
          alt="divider"
          style={{ width: "2px", height: "24px", mraginInlineEnd: "16px" }}
        />
      )}
      <ShoppingBag />

      {user && (
        <a href={path.dashboard} style={{ cursor: "pointer" }}>
          <CiUser
            style={{
              width: "26px",
              height: "26px",
              transform: "scale(1.15)",
              transformOrigin: "center",
            }}
          />
          {/* <img src={UserProfileIcon} alt="profile" /> */}
        </a>
      )}
    </IconsPartStyles>
  );
}

export default IconsPart;
