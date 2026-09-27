import styled, { css } from "styled-components";

export const TagStyles = styled.span`
  display: inline-flex;
  gap: 4px;
  padding: 3px 8px;
  color: var(--white);
  border-radius: 4px;
  font: var(--body-small-500);

  ${(props) => {
    switch (props.variant) {
      case "sale":
        return css`
          background-color: var(--danger);
        `;

      case "new":
        return css`
          background-color: var(--warning);
        `;

      case "bestSale":
        return css`
          background-color: #2388ff;
        `;

      case "outOfStock":
        return css`
          background-color: var(--gray-9);
        `;
    }
  }}
`;
