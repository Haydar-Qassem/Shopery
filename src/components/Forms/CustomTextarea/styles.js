import styled, { css } from "styled-components";
import { FIELD_STATE_BORDER_COLOR } from "../../../Constants/fieldStates";

export const TextareaControl = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 14px 16px;
  border: 1px solid ${({ $state }) => FIELD_STATE_BORDER_COLOR[$state]};
  border-radius: 6px;
  background: var(--white);
  font: var(--body-medium-400);
  line-height: 1.5;

  outline: none;

  resize: vertical;

  transition: var(--transition-fast);

  &::placeholder {
    color: var(--gray-4);
  }
`;
