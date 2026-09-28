import styled, { css } from "styled-components";

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({ $direction }) =>
    $direction === "left" ? "left: -64px;" : "right: -64px;"}

  background: var(--white);
  border: 1px solid var(--gray-1);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--gray-9);
  font-size: 20px;
  transition: var(--transition);
  z-index: 10;

  &:hover {
    background: var(--primary);
    color: var(--white);
    border-color: var(--primary);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background: var(--white);
      color: var(--gray-9);
      border-color: var(--gray-1);
    }
  }

  @media (max-width: 1450px) {
    ${({ $direction }) =>
      $direction === "left" ? "left: 16px;" : "right: 16px;"}
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1320px;
  width: 100%;
`;
