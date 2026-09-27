import styled, { css } from "styled-components";

export const HomePageStyles = styled.div`
  /* margin: 24px; */
  display: flex;
  flex-direction: column;
  // gap: "20px",

  h2 {
    font: var(--heading-5-600);
    margin-block-end: 32px;
  }

  section {
    /* margin-block: 32px; */
  }

  & > div {
    padding-block: 60px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  & > div:nth-child(even) {
    background-color: var(--gray-half);
  }
`;
