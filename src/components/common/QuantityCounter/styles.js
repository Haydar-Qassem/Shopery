import styled, { css } from "styled-components";

export const QuantityCounterStyles = styled.div`
  padding: 8px;
  border: 1px solid var(--gray-1);
  /* border-radius: 170px; */
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;

  span {
    font: var(--body-medium-400);
    color: var(--gray-9);
    width: 40px;
    text-align: center;
  }

  button {
    background-color: var(--gray-half);
    color: var(--gray-6);
    font: var(--body-medium-400);
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
  }
`;
