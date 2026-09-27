import styled, { css } from "styled-components";

export const EmailStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 536px;
  border: 1px solid var(--gray-1);
  border-inline-end: none;
  border-radius: 46px;
  padding-inline-start: 24px;
  color: var(--gray-5);
  font: var(--body-medium-400);
  background-color: var(--white);

  ${(props) => {
    switch (props.variant) {
      case "v2":
        return css`
          color: var(--gray-4);
          background-color: var(--gray-8);
          border: none;
          width: 460px;
        `;

      case "v5":
        return css`
          color: var(--green-gray-5);
        `;

      default:
        return;
    }
  }}

  button {
    font-weight: 500;
    ${(props) => {
      switch (props.variant) {
        case "v3":
          return css`
            background-color: var(--gray-8);
          `;

        case "v5":
          return css`
            background-color: var(--green-gray-8);
          `;

        case "v2":
        case "v1":
        default:
          return;
      }
    }}
  }
`;
