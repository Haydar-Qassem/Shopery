import styled, { css } from "styled-components";

export const StockStatusStyles = styled.span`
  /* margin-inline-start: 20px; */
  /* margin-block-start: 20px; */
  padding: 4px 8px;
  font: var(--body-small-400);
  border-radius: 4px;
  width: fit-content;

  ${({ variant }) => {
    if (variant === "inStock") {
      return css`
        background-color: rgb(from var(--primary) r g b / 20%);
        color: var(--hard-primary);
      `;
    } else if (variant === "outOfStock") {
      return css`
        background-color: rgb(from var(--danger) r g b / 20%);
        color: var(--danger);
      `;
    }
  }}
`;
