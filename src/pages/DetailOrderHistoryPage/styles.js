import styled, { css } from "styled-components";

export const DetailOrderHistoryPageStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 64px;
  align-items: start;
`;

export const Frame = styled.div`
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  padding-bottom: 12px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid var(--gray-1);

  & > div:first-child {
    display: flex;
    gap: 8px;
    align-items: center;

    h2 {
      font: var(--body-xl-500);
      display: inline-block;
    }

    span {
      font: var(--body-small-400);
      color: var(--gray-7);
    }
  }

  a {
    font: var(--body-medium-500);
    color: var(--primary);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: flex-start;

  & > div:first-child {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 24px;
    gap: 24px;
    width: 100%;
  }
`;

export const BillingandShipping = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--gray-1);
  border-radius: 6px;

  h3 {
    color: var(--gray-4);
    font: var(--body-small-500);
    padding: 16px 24px;
    text-transform: uppercase;
  }

  & > h3:first-of-type {
    border-right: 1px solid var(--gray-1);
    border-bottom: 1px solid var(--gray-1);
  }

  & > h3:last-of-type {
    border-bottom: 1px solid var(--gray-1);
  }

  & > .border-right {
    border-right: 1px solid var(--gray-1);
  }

  & > div {
    padding: 16px 24px;
    font: var(--body-small-400);
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .name {
      font: var(--body-medium-400);
    }

    .address {
      font: var(--body-small-400);
      color: var(--gray-7);
      /* margin-bottom: 24px; */
    }

    .label {
      font: var(--body-tiny-500);
      text-transform: uppercase;
      color: var(--gray-4);
    }
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray-1);
  border-radius: 6px;

  & > div:first-of-type {
    border-bottom: 1px solid var(--gray-1);
    padding: 16px 24px;
    display: flex;
    align-items: center;
    /* justify-content: space-evenly; */

    & > div {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    & > div:first-of-type {
      border-right: 1px solid var(--gray-1);
      padding-inline-end: 20px;
      flex: 1;
    }

    & > div:last-of-type {
      padding-inline-start: 20px;
    }

    .label {
      font: var(--body-tiny-500);
      color: var(--gray-4);
      text-transform: uppercase;
    }

    .value {
      font: var(--body-small-400);
    }
  }
  & > div:last-of-type {
    padding: 6px 20px 18px 20px;
    display: flex;
    flex-direction: column;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-block: 12px;
      border-bottom: 1px solid var(--gray-1);

      .label {
        font: var(--body-small-400);
        color: var(--gray-6);
      }

      .value {
        font: var(--body-small-500);
        color: var(--gray-9);
      }
    }

    & > p {
      padding-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .label {
        font: var(--body-large-400);
        color: var(--gray-9);
      }

      .value {
        font: var(--body-large-600);
        color: var(--primary);
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background-color: var(--gray-half);
    padding: 12px 24px;
    text-align: left;
    font: var(--body-tiny-500);
    color: var(--gray-7);
    text-transform: uppercase;
  }

  td {
    padding: 16px 24px;
    font: var(--body-small-400);
    color: var(--gray-9);
    vertical-align: middle;
  }

  .product-cell {
    display: flex;
    align-items: center;
    gap: 16px;

    img {
      width: 70px;
      height: 70px;
      object-fit: cover;
    }
  }

  /* note: the following is a workaround to style the lines between rows
  but not from border to border */

  tbody tr {
    position: relative;
  }

  tbody tr:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;

    left: 24px;
    right: 24px;

    height: 1px;
    background-color: var(--gray-1);
  }
`;
