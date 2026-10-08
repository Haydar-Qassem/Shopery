import styled, { css } from "styled-components";

export const LogoutStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 64px;
  align-items: start;

  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Card = styled.div`
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(from var(--gray-9) r g b / 0.05);
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 48px;
  text-align: center;
  background-color: var(--white);

  h2 {
    font: var(--heading-5-600);
    color: var(--gray-9);
    margin-bottom: 12px;
  }

  p {
    font: var(--body-medium-400);
    color: var(--gray-6);
    margin-bottom: 32px;
  }

  div {
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
      width: 100%;
    }
  }
`;
