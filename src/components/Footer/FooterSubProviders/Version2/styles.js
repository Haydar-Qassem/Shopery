import styled, { css } from "styled-components";

export const FirstSection = styled.div`
  background-color: var(--gray-9);
  padding: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SecondSection = styled.div`
  background-color: var(--gray-half);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 60px;
  color: var(--gray-6);

  h3 {
    color: var(--gray-9);
  }

  li:hover {
    color: var(--gray-9);
  }
`;

export const ThirdSection = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 24px 60px;
`;
