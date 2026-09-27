import styled, { css } from "styled-components";

export const PriceAmountStyles = styled.span`
  ${(props) => {
    switch (props.$size) {
      case "small":
        return css`
          font: var(--body-small-500);
        `;
      case "medium":
        return css`
          font: var(--body-medium-500);
        `;
      case "xxl":
        return css`
          font: var(--body-xxl-500);
        `;
    }
  }}
`;
