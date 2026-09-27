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
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Home <FiChevronDown />
          </NavLink>

          <NavDropdownMenu $isOpen={isHomeOpen}>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/shoppingcart">Shopping Cart</Link>
            <Link to="/shoppingcart/checkout">Checkout</Link>
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
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Shop <FiChevronDown />
          </NavLink>

          <NavDropdownMenu $isOpen={isShopOpen}>
            <Link to="/shop/category">Categories</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/shoppingcart">Shopping Cart</Link>
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
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Pages <FiChevronDown />
          </NavLink>

          <NavDropdownMenu $isOpen={isPagesOpen}>
            <Link to="/account/dashboard">My Account</Link>
            <Link to="/faqs">FAQs</Link>
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
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Blog <FiChevronDown />
          </NavLink>

          <NavDropdownMenu $isOpen={isBlogOpen}>
            <Link to="/blog">Blog</Link>
          </NavDropdownMenu>
        </NavDropdownContainer>
      </li>

      <li>
        <NavLink as={Link} to="/about">
          About Us
        </NavLink>
      </li>
      {!dontShowContactUs && (
        <li>
          <NavLink as={Link} to="/contact">
            Contact Us
          </NavLink>
        </li>
      )}
    </NavigationListStyles>
  );
}

export default NavigationList;
