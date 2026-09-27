import styled, { css } from "styled-components";

export const DropdownTrigger = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: var(--gray-6);

  &:hover {
    color: var(--gray-9);
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  padding-bottom: 8px;
  margin-bottom: -8px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: -15px;
  background-color: var(--white);
  border: 1px solid var(--gray-1);
  border-radius: 4px;
  padding: 0;
  min-width: 65px;
  box-shadow: 0px 4px 12px rgba(from var(--gray-9) r g b / 0.1);
  z-index: 10;
  display: flex;
  flex-direction: column;

  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.$isOpen ? "translateY(0)" : "translateY(-10px)"};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};

  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  span {
    padding: 10px 16px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`;
