import MiddleProvider from "./Middle";
import SmallOne from "./SmallOne";
import NavLinksProvider from "./NavLinks";

function Header({ variant }) {
  return (
    <div
    // style={{ position: "sticky", top: "0", zIndex: "100" }}
    >
      <SmallOne variant={variant} />
      <MiddleProvider variant={variant} />
      <NavLinksProvider variant={variant} />
    </div>
  );
}

export default Header;
