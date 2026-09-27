import styled, { css } from "styled-components";

export const HealthyTagStyles = styled.span`
  border-radius: 999px;
  font: var(--body-small-400);
  padding: 6px 16px;
  margin-inline-start: 20px;
  margin-block-start: 20px;
  display: inline-flex;
  gap: 10px;
  background-color: transparent;
  color: var(--gray-9);
  box-shadow: 1px var(--gray-half);

  &:hover {
    background-color: var(--primary);
    color: var(--white);
    box-shadow: none;
    transition: all 0.3s ease-in-out;
  }
`;
