import styled, { css } from "styled-components";

export const BlogPostCommentStyles = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

  p {
    font: var(--body-small-400);
    color: var(--gray-6);
  }

  strong {
    font: var(--body-small-500);
    color: var(--gray-9);
  }

  span {
    font: var(--body-small-400);
    color: var(--gray-4);
  }
`;

export const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--gray-1);
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
