import styled from "styled-components";
import {
  FIELD_STATE,
  FIELD_STATE_BORDER_COLOR,
} from "../../../Constants/fieldStates";

const FIELD_STATE_COLOR = {
  [FIELD_STATE.DEFAULT]: "var(--gray-4)",
  [FIELD_STATE.ACTIVE]: "var(--gray-9)",
  [FIELD_STATE.ERROR]: "var(--gray-7)",
  [FIELD_STATE.WARNING]: "var(--gray-7)",
  [FIELD_STATE.SUCCESS]: "var(--gray-7)",
  [FIELD_STATE.FILLED]: "var(--gray-6)",
};

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 49px;
  padding: 14px 16px;

  border-radius: 6px;
  border: 1px solid ${({ $state }) => FIELD_STATE_BORDER_COLOR[$state]};

  background: ${({ $state }) =>
    $state === "success"
      ? "rgba(from var(--soft-primary) r g b / 0.1)"
      : "var(--white)"};

  transition: var(--transition-fast);
`;

export const InputControl = styled.input`
  flex: 1; /* maybe similar to width 100% but let's try */
  height: 100%;

  border: none;
  background: transparent;
  padding: 0;
  outline: none;

  color: ${({ $state }) => FIELD_STATE_COLOR[$state]};
  font: var(--body-medium-400);

  &::placeholder {
    color: var(--gray-4);
  }
`;

export const SuccessIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-start: 12px;
  font-size: 16px;
  color: var(--primary);
  pointer-events: none;
`;

export const PasswordToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  padding: 0;

  border: none;
  background: transparent;
  font-size: 16px;
  color: var(--gray-9);
  cursor: pointer;

  transition: var(--transition-fast);
  &:hover {
    opacity: 0.7;
  }
`;
