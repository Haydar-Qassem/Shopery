import styled, { css } from "styled-components";

export const CountdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-block: 18px 24px;
`;

export const Title = styled.h4`
  font: var(--body-small-400);
  color: var(--gray-4);
  /* margin: 0; */
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px; // needs check
`;

export const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 4px; Space between number and label */
`;

export const Value = styled.span`
  font: var(--body-large-500);
  color: var(--gray-9);
`;

export const Label = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: var(--gray-4);
  text-transform: uppercase;
  letter-spacing: 3%;
`;

export const Separator = styled.span`
  font: var(--body-xl-400);
  color: var(--gray-5);
  margin-top: -18px;
`;
