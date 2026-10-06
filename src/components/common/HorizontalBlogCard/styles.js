import styled, { css } from "styled-components";

export const HorizontalBlogCardStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  .imgContainer {
    width: 100px;
    height: 77px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .infoContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    h4 {
      font: var(--body-medium-500);
    }

    span {
      display: flex;
      gap: 6px;
      font: var(--body-small-400);
      color: var(--gray-600);
    }
  }
`;
