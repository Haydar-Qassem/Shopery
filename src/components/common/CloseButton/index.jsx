import React from "react";
import { IoCloseOutline } from "react-icons/io5"; // Or any 'X' icon you prefer
import { StyledCloseButton } from "./styles";

export default function CloseButton({ variant, onClick }) {
  return (
    <StyledCloseButton type="button" $variant={variant} onClick={onClick}>
      <IoCloseOutline />
    </StyledCloseButton>
  );
}
