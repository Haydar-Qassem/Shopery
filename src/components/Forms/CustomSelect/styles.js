import styled from "styled-components";
import { FIELD_STATE_BORDER_COLOR } from "../../../Constants/fieldStates";

export const SelectControl = styled.select`
  width: 100%;
  height: 49px;
  padding: 14px 16px;
  border: 1px solid ${({ $state }) => FIELD_STATE_BORDER_COLOR[$state]};
  border-radius: 6px;
  background: var(--white);
  font: var(--body-medium-400);

  outline: none;
  cursor: pointer;
  appearance: none;
  transition: var(--transition-fast);
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectChevron = styled.span`
  position: absolute;
  top: 55%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
  /* font-size: 14px; */
`;
