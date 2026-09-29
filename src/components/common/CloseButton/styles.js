import styled, { css } from "styled-components";

export const StyledCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  /* background-color: transparent;
  border: 1px solid var(--gray-2);
  color: var(--gray-6); */

  cursor: pointer;
  padding: 0;
  transition: var(--transition-fast);

  /* &:hover {
    border-color: var(--gray-9);
    color: var(--gray-9);
  } */

  ${({ $variant }) =>
    $variant === "outline" &&
    css`
      background-color: transparent;
      border: 1px solid var(--gray-2);
      color: var(--gray-6);
      width: 24px;
      height: 24px;

      &:hover {
        border-color: var(--gray-9);
        color: var(--gray-9);
      }

      svg {
        font-size: 14px;
      }
    `}

  ${({ $variant }) =>
    $variant === "filled" &&
    css`
      background-color: var(--white);
      border: none;
      color: var(--gray-9);
      width: 45px;
      height: 45px;
      box-shadow: 0px 0px 6px rgba(from var(--gray-9) r g b / 0.1);

      &:hover {
        background-color: var(--primary);
        color: var(--white);
      }

      svg {
        font-size: 25px;
      }
    `}
`;
