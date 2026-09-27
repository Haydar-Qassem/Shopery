import styled, { css } from "styled-components";

export const BlogCardStyles = styled.article`
  width: 424px;
  height: 494px;
  border-radius: 8px;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
  cursor: pointer;
  box-shadow: 0px 0px 50px rgba(from var(--gray-9) r g b / 0.08);

  &:hover {
    transform: scale(1.02);
    h3 {
      color: var(--hard-primary);
      transition: var(--transition);
    }
    .dateBadge {
      opacity: 1;
      transition: var(--transition);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 324px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .dateBadge {
    position: absolute;
    bottom: 24px;
    left: 24px;
    width: 58px;
    height: 58px;
    aspect-ratio: 1/1;
    background-color: var(--white);
    border-radius: 8px;
    padding: 6px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0px 0px 5px rgba(from var(--gray-9) r g b / 0.08);
    transition: var(--transition);

    opacity: 0.8;

    .dateDay {
      font: var(--body-xl-500);
      color: var(--gray-9);
      /* line-height: 1; */
    }

    .dateMonth {
      font: var(--body-small-400);
      color: var(--gray-5);
      text-transform: uppercase;
      line-height: 1;
      /* letter-spacing: 1px; */
      /* margin-top: 4px; */
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  align-items: flex-start;
  /* flex: 1; */

  h3 {
    font-size: 18px;
    font-weight: 500;
    color: var(--gray-9);
    line-height: 1.5;
    transition: var(--transition);
  }

  a {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    gap: 8px;
    color: var(--primary);
    font: var(--body-medium-600);
    /* margin-block-start: 20px; */
    transition: var(--transition);

    &:hover {
      color: var(--hard-primary);
    }
  }
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: var(--gray-3);
`;
export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
