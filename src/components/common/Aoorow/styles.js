import styled from "styled-components";

export const AoorowStyles = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-inline-start: 20px;
  margin-block-start: 20px;
  min-width: 20px;
  aspect-ratio: 1/1;
  background-color: var(--white);
  color: var(--gray-9);
  /* box-shadow: inset; */
  border-radius: 999px;
  padding: 4px;

  &:hover {
    background-color: var(--primary);
    color: var(--white);
    box-shadow: none;
    transition: all 0.3s ease-in-out;
  }
`;
