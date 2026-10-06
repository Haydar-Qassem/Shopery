import styled, { css } from "styled-components";

export const ProductDetailsPageStyles = styled.div`
  padding-block: 24px 48px;
`;

export const RelatedSection = styled.section`
  margin-top: 80px;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 32px;
    color: var(--gray-9);
  }
  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
`;
