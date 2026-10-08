import styled, { css } from "styled-components";

export const AccountNavigationStyles = styled.div`
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding-top: 8px;

  & > h2 {
    padding: 16px 20px;
    font: var(--body-xl-500);
  }
`;

export const NavItem = styled.a`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 20px;
  font: var(--body-medium-400);
  color: var(--gray-6);
  cursor: pointer;

  &:hover {
    background-color: var(--gray-1);
    color: var(--gray-9);
  }

  ${(props) =>
    props.$isactive &&
    css`
      background-color: var(--green-gray-half);
      border-inline-start: 4px solid var(--primary);
    `}
`;
