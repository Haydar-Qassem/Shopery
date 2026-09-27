import styled, { css } from "styled-components";

export const FeaturesItemStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  height: 48px;

  .Image-Container {
    width: 40px;
    height: 40px;
    aspect-ratio: 1/1;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .Text-Container {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    gap: 8px;
    .title {
      font: var(--body-medium-600);
      color: var(--gray-9);
      line-height: 1;
    }

    .description {
      font: var(--body-small-400);
      color: var(--gray-4);
    }
  }
`;
