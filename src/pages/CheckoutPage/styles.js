import styled, { css } from "styled-components";

export const CheckoutPageStyles = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: flex-start;

  padding-top: 40px;
  padding-bottom: 80px;

  h2 {
    padding-bottom: 20px;
    font: var(--body-xxl-500);
  }

  .billing-info {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;

    border-bottom: 1px solid var(--gray-1);
    padding-bottom: 32px;
  }

  .additional-info {
    padding-top: 32px;
  }
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  gap: 24px;

  h3 {
    font: var(--body-xl-500);
    color: var(--gray-9);
  }

  /* & > div > div {
    }
    
    & > div > div:not(:last-child) {
      } */
`;

export const Total = styled.div`
  & > div {
    padding: 12px 0;
    font: var(--body-small-400);
    color: var(--gray-7);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      border-bottom: 1px solid var(--gray-1);
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
    span {
      font: var(--body-small-400);
    }
  }
`;
