import styled, { css } from "styled-components";

export const WishlistTableStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  padding-block-start: 16px;
  /* padding-block-end: 24px; */
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-inline: 24px;

  & > *:not(:last-child) {
    border-bottom: 1px solid var(--gray-1);
  }

  & > * {
    padding-block-end: 12px;
  }
`;

export const HeaderRow = styled.div`
  height: 30px;
  font: var(--body-small-500);
  color: var(--gray-5);
  padding-inline: 24px;
  /* padding-top: 16px; */
  border-bottom: 1px solid var(--gray-1);

  width: 100%;
  display: grid;
  grid-template-columns: 42% 26.4% 16.3% 15.3%;
  align-items: start;
  span {
    line-height: 1;
  }
`;

export const FooterRow = styled.div`
  height: 88px;
  width: 100%;
  border-top: 1px solid var(--gray-1);
  padding: 24px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: fit-content;
    font: var(--body-small-400);
  }
`;
