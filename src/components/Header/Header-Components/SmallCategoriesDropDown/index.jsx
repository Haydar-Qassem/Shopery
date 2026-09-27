import { FiChevronDown } from "react-icons/fi";
import {
  CategoriesBox,
  CategoriesDropDownStyles,
  DropdownMenu,
} from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";

function SmallCategoriesDropDown() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <CategoriesDropDownStyles
      onMouseEnter={() => setIsCategoriesOpen(true)}
      onMouseLeave={() => setIsCategoriesOpen(false)}
    >
      <CategoriesBox>
        {/* <div
          style={{
            width: "64px",
            aspectRatio: "1/1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--primary)",
            color: "var(--white)",
          }}
        > */}
        {/* </div> */}
        <SlMenu style={{ width: "18px", height: "18px" }} />

        <span>All Categories</span>
        <FiChevronDown />
      </CategoriesBox>
      <DropdownMenu $isOpen={isCategoriesOpen}>
        <Link to="/vegetables">Fresh Fruit</Link>
        <Link to="/vegetables">Vegetables</Link>
        <Link to="/vegetables">River Fish</Link>
        <Link to="/vegetables">Chicken & Meat</Link>
        <Link to="/vegetables">Drink & Water</Link>
        <Link to="/vegetables">Yogurt & Ice Cream</Link>
        <Link to="/vegetables">Cake & Bread</Link>
        <Link to="/vegetables">Butter & Cream</Link>
        <Link to="/vegetables">Cooking</Link>
      </DropdownMenu>
    </CategoriesDropDownStyles>
  );
}

export default SmallCategoriesDropDown;
