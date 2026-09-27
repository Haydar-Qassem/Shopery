import styled, { css } from "styled-components";

export const CountdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  /* padding-block: 18px 24px; */
`;

export const Title = styled.h4`
  font: var(--body-small-400);
  color: var(--white);
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
  font: var(--body-xxl-400);
  color: var(--white);
`;

export const Label = styled.span`
  font: var(--body-tiny-400);
  color: rgba(from var(--white) r g b / 0.8);
  text-transform: uppercase;
  letter-spacing: 3%;
  line-height: 1;
`;

export const Separator = styled.span`
  font: var(--body-xxl-400);
  color: rgba(from var(--white) r g b / 0.8);
  margin-top: -12px;
`;
