import styled, { css } from "styled-components";

export const DashboardPageStyles = styled.div`
  margin-top: 24px;
  margin-bottom: 64px;
  display: grid;
  grid-template-columns: 3fr 9fr;
  align-items: start;
  gap: 24px;

  h3 {
    font: var(--body-xl-500);
    color: var(--gray-9);
  }
  h4 {
    font: var(--body-large-500);
    color: var(--gray-9);
  }
`;

export const Frame = styled.div`
  border: 1px solid var(--gray-1);
  border-radius: 8px;
`;

export const OrderTable = styled.table`
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
    color: var(--gray-8);
  }

  a {
    color: var(--primary);
    font: var(--body-small-500);
  }
`;

export const ProfileCard = styled.div`
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 999px;
    object-fit: cover;
    margin-bottom: 16px;
  }
`;

export const BillingAddressCard = styled.div`
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
