import styled, { css } from "styled-components";

export const ShoppingCartPageStyles = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;

  h2 {
    font: var(--heading-5-600);
    color: var(--gray-9);
    text-align: center;
    padding-bottom: 40px;
  }

  & > div {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
    align-items: flex-start;
  }
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  gap: 12px;

  h3 {
    font: var(--body-xl-500);
    color: var(--gray-9);
  }

  & > div > div {
    padding: 12px 0;
    font: var(--body-small-400);
    color: var(--gray-7);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div > div:not(:last-child) {
    border-bottom: 1px solid var(--gray-1);
  }
`;

export const CouponDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  padding: 20px;

  span {
    font: var(--body-xl-500);
    color: var(--gray-9);
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 76%;
    border: 1px solid var(--gray-1);
    border-radius: 999px;
    /* height: 100%; */

    input {
      padding: 14px 24px;
      color: var(--gray-9);
      font: var(--body-medium-400);

      background-color: transparent;

      border: none;
      outline: none;

      &::placeholder {
        color: var(--gray-4);
      }
    }

    button {
      transition: var(--transition);
      padding: 16px 40px;
      /* width: 98px; */
      border: 1px solid var(--gray-8);
      border-radius: 999px;
      background-color: var(--gray-8);
      color: var(--white);
      font: var(--body-medium-600);

      &:hover {
        background-color: var(--gray-9);
        border-color: var(--gray-9);
      }
    }
  }
`;
