import styled, { css } from "styled-components";

export const NavigationListStyles = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;

  li {
    list-style: none;
    cursor: pointer;
    color: ${(props) =>
      props.variant === "main" ? "var(--gray-4)" : "var(--gray-5)"};
    transition: var(--transition);

    &:hover {
      ${(props) => {
        switch (props.variant) {
          case "main":
          case "box-layout":
            return css`
              color: var(--white);
            `;
          case "colorful":
            return css`
              color: var(--primary);
            `;
          case "simple":
            return css`
              color: var(--gray-9);
            `;
        }
      }}
    }
  }
`;

export const NavDropdownContainer = styled.div`
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

export const NavDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: -20px;
  background-color: var(--white);
  border: 1px solid var(--gray-1);
  border-radius: 4px;
  padding: 0;
  min-width: 200px;
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
