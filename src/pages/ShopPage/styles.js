import styled, { css } from "styled-components";

export const ShopPageStyles = styled.div`
  padding-top: 24px;
  padding-bottom: 72px;
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 24px;
  margin-bottom: 24px;
  width: 100%;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  & > div {
    width: 100%;
  }

  & > div:not(:first-child) {
    padding-block: 24px;
  }
  & > div:not(:last-child) {
    border-bottom: 1px solid var(--gray-1);
  }
  & > div:first-child {
    padding-bottom: 24px;
  }

  li {
    padding-block: 10px;
  }

  button {
    font: var(--body-small-400);
  }
`;

export const Title = styled.div`
  padding-bottom: 20px;
  color: var(--gray-9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h3 {
    font: var(--body-xl-500);
    display: inline-block;
  }
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const SliderContainer = styled.div`
  padding: 10px 0;
  width: 100%;

  .rc-slider-track {
    background-color: var(--primary);
    height: 4px;
  }
  .rc-slider-rail {
    background-color: var(--gray-1);
    height: 4px;
  }
  .rc-slider-handle {
    border: 2px solid var(--primary);
    background-color: var(--white);
    width: 16px;
    height: 16px;
    margin-top: -6px;
    opacity: 1;
    box-shadow: none;
  }
  .rc-slider-handle:active,
  .rc-slider-handle:hover,
  .rc-slider-handle:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(from var(--hard-primary) r g b / 0.2);
  }
`;

export const PriceLabel = styled.div`
  margin-top: 12px;
  font-size: 14px;
  color: var(--gray-9);
`;
