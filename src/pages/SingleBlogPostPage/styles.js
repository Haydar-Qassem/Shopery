import styled, { css } from "styled-components";

export const SingleBlogPostPageStyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  align-items: start;
  /* padding-block: 40px; */
  margin-block-start: 32px;
  margin-block-end: 80px;
`;

export const MainContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .hero-image {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  & > div {
    width: 100%;
  }

  & > div:not(:first-child) {
    padding-block: 24px;
  }
  & > div:not(:last-child) {
    border-bottom: 1px solid var(--gray-1);
  }
  & > div:first-child {
    padding-bottom: 24px;
  }

  li {
    padding-block: 10px;
  }

  button {
    font: var(--body-small-400);
  }
`;

export const Title = styled.div`
  padding-bottom: 20px;
  color: var(--gray-9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h3 {
    font: var(--body-xl-500);
    display: inline-block;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  img {
    transition: var(--transition);
  }
  img:hover {
    transform: scale(1.05);
    transition: var(--transition);
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  /* text-align: start; */
  h3 {
    font: var(--body-xl-500);
    color: var(--gray-9);
  }

  p {
    font: var(--body-large-400);
    color: var(--gray-5);
  }
`;

export const CommentsSection = styled.section`
  .comments-section > div:not(:last-child) {
    padding-block: 24px;
    border-bottom: 1px solid var(--gray-1);
  }

  .comments-section > div:last-child {
    padding-block-start: 24px;
  }

  button {
    margin-block-start: 24px;
  }
`;
