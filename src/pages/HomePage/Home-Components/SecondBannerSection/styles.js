import styled from "styled-components";

export const PromoGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  height: 536px;
  width: 100%;
`;

export const PromoCard = styled.div`
  padding-top: 40px;
  border-radius: 10px;
  position: relative;
  text-align: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 243px;
    width: 100%;
    & > span {
      font: var(--body-small-500);
      text-transform: uppercase;
      line-height: 1;
      letter-spacing: 3%;
      color: var(--white);
      margin-bottom: 16px;
    }

    & > h3 {
      font: var(--heading-4-600);
      line-height: 1;
      color: var(--white);
    }

    & > div {
      margin-top: 16px;
      font: var(--body-large-400);
      color: var(--white);
    }

    & > button {
      position: absolute;
      top: 184px;
    }
  }
`;

export const HighlightText = styled.span`
  color: var(--warning);
  font-weight: 600;
`;

export const DarkBadge = styled.span`
  background-color: var(--gray-9);
  color: #ffcc00;
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: 600;
`;