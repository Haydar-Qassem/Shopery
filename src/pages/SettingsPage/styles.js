import styled, { css } from "styled-components";

export const SettingsPageStyles = styled.div`
  margin-top: 24px;
  margin-bottom: 64px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: start;
  gap: 24px;
`;

export const AccountSettings = styled.div`
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  padding-block-start: 24px;

  h2 {
    font: var(--body-xl-500);
    color: var(--gray-9);
    padding-inline: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--gray-1);
  }

  & > div {
    padding: 24px;
    display: grid;
    grid-template-columns: 5fr 4fr;
    gap: 24px;
  }

  .fields {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .photo {
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    img {
      width: 224px;
      height: 224px;
      border-radius: 999px;
    }
  }
`;

export const BillingAddress = styled.div`
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  padding-block: 24px;

  h2 {
    font: var(--body-xl-500);
    color: var(--gray-9);
    padding-inline: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--gray-1);
  }

  & > div {
    padding: 24px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;
  }
`;

export const PasswordCard = styled.div`
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  padding-block: 24px;

  h2 {
    font: var(--body-xl-500);
    color: var(--gray-9);
    padding-inline: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--gray-1);
  }

  & > div {
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`;
