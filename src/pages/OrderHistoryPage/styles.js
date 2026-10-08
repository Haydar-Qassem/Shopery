import styled, { css } from "styled-components";

export const OrderHistoryPageStyles = styled.div`
  margin-top: 24px;
  margin-bottom: 64px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: start;
  gap: 24px;
`;

export const Frame = styled.div`
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  padding-block: 24px;

  h2 {
    font: var(--body-xl-500);
    color: var(--gray-9);
    padding-inline: 24px;
    margin-bottom: 16px;
  }
`;

export const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background-color: var(--gray-half);
    padding: 12px 24px;
    text-align: start;
    font: var(--body-tiny-500);
    color: var(--gray-7);
    text-transform: uppercase;
  }

  td {
    padding: 16px 24px;
    font: var(--body-small-400);
    color: var(--gray-8);
  }

  a {
    color: var(--primary);
    font: var(--body-small-500);
  }
`;
