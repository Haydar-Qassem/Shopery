import styled, { css } from "styled-components";

export const CompanyStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  font: var(--body-small-400);
  color: inherit;
  width: 336px;

  h3 {
    font: var(--body-large-500);
  }

  /* we should put the following in the footer provider and keep the color as inherit */

  /* ${(props) => {
    switch (props.variant) {
      case "v4":
        return css`
          color: var(--gray-4);
        `;

      case "v5":
        return css`
          color: var(--green-gray-4);
        `;

      case "v1":
      case "v2":
      case "v3":
      default:
        return css`
          color: var(--gray-5);
        `;
    }
  }} */
`;
