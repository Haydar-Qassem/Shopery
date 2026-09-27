import styled, { css } from "styled-components";

export const CategoriesDropDownStyles = styled.div`
  position: relative;
  display: inline-block;
  padding-bottom: 20px;
  margin-bottom: -20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  /* &:hover {
    color: ${(props) => (props.onDark ? "var(--white)" : "var(--primary)")};
  } */
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0px;
  background-color: var(--white);
  border: 1px solid var(--gray-1);
  border-radius: 4px;
  padding: 0;
  width: 218px;
  box-shadow: 0px 4px 12px rgba(from var(--gray-9) r g b / 0.1);
  z-index: 50;

  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.$isOpen ? "translateY(0)" : "translateY(-10px)"};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
  transition: all 0.2s ease-in-out;

  a {
    display: block;
    padding: 10px 20px;
    color: var(--gray-9);
    text-decoration: none;
    font-size: 14px;

    &:hover {
      background-color: var(--gray-2);
      color: var(--primary);
    }
  }
`;

export const CategoriesBox = styled.div`
  width: 218px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 24px;
  background-color: var(--primary);
  font: var(--body-small-500);
  color: var(--white);
`;
