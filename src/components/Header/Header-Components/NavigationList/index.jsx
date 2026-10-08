import { FiChevronDown } from "react-icons/fi";
import {
  NavDropdownContainer,
  NavDropdownMenu,
  NavigationListStyles,
} from "./styles";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import BigCategoriesDropDown from "../BigCategoriesDropDown";
import SmallCategoriesDropDown from "../SmallCategoriesDropDown";
import { path } from "../../../../Constants/Paths";

function NavigationList({ dontShowContactUs, variant }) {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <NavigationListStyles variant={variant}>
      {variant === "box-layout" && (
        <li>
          <BigCategoriesDropDown />
        </li>
      )}

      {variant === "colorful" && (
        <li>
          <SmallCategoriesDropDown />
        </li>
      )}

      <li>
        <NavDropdownContainer
          onMouseEnter={() => setIsHomeOpen(true)}
          onMouseLeave={() => setIsHomeOpen(false)}
        >
          <NavLink
            as={Link}
            to={path.home}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Home <FiChevronDown />
          </NavLink>

          <NavDropdownMenu $isOpen={isHomeOpen}>
            <Link to={path.wishlist}>Wishlist</Link>
            <Link to={path.cart}>Shopping Cart</Link>
            <Link to={path.checkout}>Checkout</Link>
          </NavDropdownMenu>
        </NavDropdownContainer>
      </li>

      <li>
        <NavDropdownContainer
          onMouseEnter={() => setIsShopOpen(true)}
          onMouseLeave={() => setIsShopOpen(false)}
        >
          <NavLink
            as={Link}
            to={path.home}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Shop <FiChevronDown />
          </NavLink>

          <NavDropdownMenu $isOpen={isShopOpen}>
            <Link to={path.shop}>Shop</Link>
            <Link to={path.wishlist}>Wishlist</Link>
            <Link to={path.cart}>Shopping Cart</Link>
          </NavDropdownMenu>
        </NavDropdownContainer>
      </li>

      <li>
        <NavDropdownContainer
          onMouseEnter={() => setIsPagesOpen(true)}
          onMouseLeave={() => setIsPagesOpen(false)}
        >
          <NavLink
            as={Link}
            to={path.home}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Pages <FiChevronDown />
          </NavLink>

          <NavDropdownMenu $isOpen={isPagesOpen}>
            <Link to={path.dashboard}>My Account</Link>
            <Link to={path.faqs}>FAQs</Link>
          </NavDropdownMenu>
        </NavDropdownContainer>
      </li>

      <li>
        <NavDropdownContainer
          onMouseEnter={() => setIsBlogOpen(true)}
          onMouseLeave={() => setIsBlogOpen(false)}
        >
          <NavLink
            as={Link}
            to={path.home}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Blog <FiChevronDown />
          </NavLink>

          <NavDropdownMenu $isOpen={isBlogOpen}>
            <Link to={path.blog}>Blog</Link>
          </NavDropdownMenu>
        </NavDropdownContainer>
      </li>

      <li>
        <NavLink as={Link} to={path.about}>
          About Us
        </NavLink>
      </li>
      {!dontShowContactUs && (
        <li>
          <NavLink as={Link} to={path.contact}>
            Contact Us
          </NavLink>
        </li>
      )}
    </NavigationListStyles>
  );
}

export default NavigationList;
