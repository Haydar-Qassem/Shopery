import { FiChevronDown } from "react-icons/fi";
import { DropdownContainer, DropdownMenu, DropdownTrigger } from "./styles";
import { useState } from "react";

function LanguageSwitcher() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <DropdownContainer
      onMouseEnter={() => setIsLangOpen(true)}
      onMouseLeave={() => setIsLangOpen(false)}
    >
      <DropdownTrigger>
        En <FiChevronDown />
      </DropdownTrigger>

      <DropdownMenu $isOpen={isLangOpen}>
        <span
          onClick={() => {
            return;
          }}
        >
          English
        </span>
        <span
          onClick={() => {
            return;
          }}
        >
          Arabic
        </span>
        <span
          onClick={() => {
            return;
          }}
        >
          French
        </span>
      </DropdownMenu>
    </DropdownContainer>
  );
}

export default LanguageSwitcher;
