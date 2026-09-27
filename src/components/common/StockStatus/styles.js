import styled, { css } from "styled-components";

export const StockStatusStyles = styled.span`
  margin-inline-start: 20px;
  margin-block-start: 20px;
  padding: 4px 8px;
  font: var(--body-small-400);
  border-radius: 4px;

  ${({ variant }) => {
    if (variant === "inStock") {
      return css`
        background-color: rgb(from #20B526 r g b / 20%);
        color: var(--hard-primary);
        `;
    } else if (variant === "outOfStock") {
      return css`
        background-color: rgb(from #EA4B48 r g b / 20%);
        color: var(--danger);
      `;
    }
  }}
`;
