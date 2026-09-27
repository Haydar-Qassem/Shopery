import styled, { css } from "styled-components";

export const SearchStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  width: 400px;
  border: 1px solid var(--gray-2);
  border-inline-end: none;
  border-radius: 6px 0px 0px 6px;
  padding: 12px 18px 12px 16px;
`;

export const SearchButtonStyles = styled.button`
  width: 98px;
  border: 1px solid var(--primary);
  border-radius: 0px 6px 6px 0px;
  padding: 14px 24px;
  background-color: var(--primary);
  color: var(--white);
  font: var(--body-small-600);
`;
