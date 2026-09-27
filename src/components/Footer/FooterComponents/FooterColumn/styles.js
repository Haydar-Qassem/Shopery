import styled, { css } from "styled-components";

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font: var(--body-large-500);
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;

    a {
      font: var(--body-medium-400);
      transition: color 0.2s ease;
    }
  }
`;
