import { FiChevronDown } from "react-icons/fi";
import { DropdownContainer, DropdownMenu, DropdownTrigger } from "./styles";
import { useState } from "react";

function CurrencySwitcher() {
  const [isCurrOpen, setIsCurrOpen] = useState(false);

  return (
    <DropdownContainer
      onMouseEnter={() => setIsCurrOpen(true)}
      onMouseLeave={() => setIsCurrOpen(false)}
    >
      <DropdownTrigger>
        USD <FiChevronDown />
      </DropdownTrigger>

      <DropdownMenu $isOpen={isCurrOpen}>
        <span
          onClick={() => {
            return;
          }}
        >
          USD
        </span>
        <span
          onClick={() => {
            return;
          }}
        >
          EUR
        </span>
        <span
          onClick={() => {
            return;
          }}
        >
          GBP
        </span>
      </DropdownMenu>
    </DropdownContainer>
  );
}

export default CurrencySwitcher;
