import { Link, useLocation } from "react-router-dom";
import { AccountNavigationStyles, NavItem } from "./styles";
import { path } from "../../../Constants/Paths";

function AccountNavigation() {
  const location = useLocation();

  return (
    <AccountNavigationStyles>
      <h2>Navigation</h2>
      <NavItem
        $isactive={location.pathname === path.dashboard}
        href={path.dashboard}
      >
        Dashboard
      </NavItem>
      <NavItem
        $isactive={
          location.pathname === path.orderHistory ||
          location.pathname.startsWith(path.orderHistory)
        }
        href={path.orderHistory}
      >
        Order History
      </NavItem>
      <NavItem
        $isactive={location.pathname === path.wishlist}
        href={path.wishlist}
      >
        Wishlist
      </NavItem>
      <NavItem $isactive={location.pathname === path.cart} href={path.cart}>
        Shopping Cart
      </NavItem>
      <NavItem
        $isactive={location.pathname === path.settings}
        href={path.settings}
      >
        Settings
      </NavItem>
      <NavItem $isactive={location.pathname === path.logout} href={path.logout}>
        Log-out
      </NavItem>
    </AccountNavigationStyles>
  );
}

export default AccountNavigation;
