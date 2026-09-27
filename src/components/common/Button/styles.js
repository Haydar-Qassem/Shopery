import styled, { css } from "styled-components";

export const ButtonStyles = styled.button`
  color: var(--white);
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  transition: var(--transition);

  ${(props) => {
    switch (props.variant) {
      case "fill-white":
        return css`
          background-color: var(--white);
          color: var(--primary);
          border: none;
          &:hover {
            background-color: var(--soft-primary);
            color: var(--white);
          }
        `;

      case "border":
        return css`
          background-color: transparent;
          color: var(--primary);
          border: 3px solid var(--primary);
          &:hover {
            color: var(--hard-primary);
            border-color: var(--hard-primary);
            /* transition: var(--transition); */
          }
        `;

      case "ghost":
        return css`
          background-color: var(--primary) 10%;
          color: var(--primary);
          border: none;
          &:hover {
            color: var(--hard-primary);
            background-color: var(--hard-primary) 20%;
            /* transition: var(--transition); */
          }
        `;

      case "fill":
      default:
        return css`
          background-color: var(--primary);
          color: var(--white);
          border: none;
          &:hover {
            background-color: var(--hard-primary);
            /* transition: var(--transition); */
          }
        `;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          font: var(--body-tiny-600);
          padding: 10px 24px;
        `;
      case "medium":
        return css`
          font: var(--body-small-600);
          padding: 14px 32px;
        `;
      case "large":
        return css`
          font: var(--body-medium-600);
          padding: 16px 40px;
        `;
    }
  }}
`;
