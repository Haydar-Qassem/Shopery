import styled, { css } from "styled-components";

export const FAQsPageStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  margin-top: 64px;
  align-items: center;
`;

export const FAQContent = styled.div`
  align-items: center;
  h2 {
    font: var(--heading-2-600);
    color: var(--gray-9);
    margin-bottom: 32px;
  }
`;

export const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AccordionItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props) =>
    props.$isActive ? "var(--white)" : "var(--gray-half)"};
  transition: var(--transition-fast);

  /* &:hover {
    background-color: var(--green-gray-half);
  } */

  ${(props) =>
    props.$isActive &&
    css`
      box-shadow: 0px 0px 20px rgba(from var(--gray-9) r g b / 0.05);
      border: 1px solid var(--primary);
      .accordion-header {
        border-bottom: 1px solid var(--primary);
      }
    `}

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    font: var(--body-large-500);
    color: ${(props) => (props.$isActive ? "var(--primary)" : "var(--gray-9)")};
  }

  .accordion-body {
    padding: ${(props) => (props.$isActive ? "16px" : "0 16px")};
    max-height: ${(props) => (props.$isActive ? "500px" : "0")};
    opacity: ${(props) => (props.$isActive ? "1" : "0")};
    overflow: hidden;
    transition: var(--transition-fast);

    p {
      font: var(--body-small-400);
      color: var(--gray-6);
    }
  }
`;

export const FAQImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;
