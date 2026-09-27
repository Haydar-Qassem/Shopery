import styled, { css } from "styled-components";

export const CategoryCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-block-start: 16px;
  padding-block-end: 24px;
  padding-inline: 5x;
  width: 200px;
  height: 213px;
  border: 1px solid var(--gray-1);
  border-radius: ${(props) => (props.rounded ? "5px" : "0px")};

  font: var(--body-large-500);
  color: var(--gray-9);

  transition: var(--transition);

  img {
    width: 100%;
    height: 61%;
    object-fit: contain;
  }

  &:hover {
    border-color: var(--hard-primary);
    color: var(--hard-primary);
  }
`;
