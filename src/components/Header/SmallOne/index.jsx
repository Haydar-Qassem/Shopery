import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LocationStyles, LinkStyles, SmallOneStyles } from "./styles";
import { selectUser } from "../../../store/auth/authSelectors";
import mapPin from "../../../assets/images/Map Pin.svg";
import divider from "../../../assets/images/Devider.svg";
import LanguageSwitcher from "../Header-Components/LanguageSwitcher";
import CurrencySwitcher from "../Header-Components/CurrencySwitcher";

function SmallOne({ variant }) {
  const user = useSelector(selectUser);

  let backgroundColor;
  let color;
  if (variant === "colorful") {
    backgroundColor = "var(--primary)";
    color = "var(--white)";
  } else if (variant === "simple") {
    backgroundColor = "var(--gray-half)";
    color = "var(--green-gray-7)";
  } else if (variant === "box-layout") {
    backgroundColor = "var(--white)";
    color = "var(--gray-5)";
  } else {
    backgroundColor = "var(--white)";
    color = "var(--gray-5)";
  }

  const handleBoxLayout = variant === "box-layout" ? "container" : "";

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
      className={handleBoxLayout}
    >
      <SmallOneStyles className="container" variant={variant}>
        <LocationStyles>
          <img
            src={mapPin}
            alt="location pin"
            style={{ width: "15px", height: "18px" }}
          />
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </LocationStyles>

        <LinkStyles>
          <LanguageSwitcher />

          <CurrencySwitcher />

          {!user && (
            <img
              src={divider}
              alt="divider"
              style={{ width: "2px", height: "15px", mraginInlineEnd: "20px" }}
            />
          )}
          {!user && (
            <span>
              <Link to="/account/login">Sign in</Link> /{" "}
              <Link to="/account/register">Sign Up</Link>
            </span>
          )}
        </LinkStyles>
      </SmallOneStyles>
    </div>
  );
}

export default SmallOne;
