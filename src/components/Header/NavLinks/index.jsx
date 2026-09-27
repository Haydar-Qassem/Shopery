import { NavLinksStyles } from "./styles";
import NavigationList from "../Header-Components/NavigationList";
import Telephone from "../Header-Components/Telephone";
import IconsPart from "../Header-Components/IconsPart";

function NavLinksProvider({ variant }) {
  if (variant === "simple") return;
  switch (variant) {
    case "box-layout":
      return (
        
          <NavLinksStyles
            className="container"
            style={{ backgroundColor: "var(--gray-9)", padding: "0" }}
          >
            <NavigationList variant={variant} />
            <IconsPart variant={variant} />
          </NavLinksStyles>
      );
    case "colorful":
      return (
        <div
          style={{
            backgroundColor: "var(--gray-half)",
            padding: "0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <NavLinksStyles className="container">
            <NavigationList variant={variant} />
            <Telephone notwhite />
          </NavLinksStyles>
        </div>
      );
    case "main":
    default:
      return (
        <div
          style={{
            backgroundColor: "var(--gray-8)",
            padding: "16px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <NavLinksStyles className="container">
            <NavigationList variant={variant} />
            <Telephone />
          </NavLinksStyles>
        </div>
      );
  }
}

export default NavLinksProvider;
