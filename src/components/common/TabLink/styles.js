import styled, { css } from "styled-components";

export const TabLinkStyles = styled.a`
  display: inline-block;
  margin-inline-start: 20px;
  margin-block-start: 20px;
  padding: 16px;
  background-color: var(--white);
  color: var(--gray-5);

  &:hover {
    color: var(--gray-9);
    transition: var(--transition);
  }

  border-bottom: ${(props) => {
    return css`
      ${props.$isActive ? "2px solid var(--primary)" : ""};
      transition: var(--transition);
      color: ${props.$isActive ? "var(--gray-9)" : ""};
    `;
  }};
`;
