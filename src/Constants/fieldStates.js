export const FIELD_STATE = {
  DEFAULT: "default",
  ACTIVE: "active",
  ERROR: "error",
  WARNING: "warning",
  SUCCESS: "success",
  FILLED: "filled",
};

export const FIELD_STATE_BORDER_COLOR = {
  [FIELD_STATE.DEFAULT]: "var(--gray-1)",
  [FIELD_STATE.ACTIVE]: "var(--primary)",
  [FIELD_STATE.ERROR]: "var(--danger)",
  [FIELD_STATE.WARNING]: "var(--warning)",
  [FIELD_STATE.SUCCESS]: "var(--primary)",
  [FIELD_STATE.FILLED]: "var(--gray-1)",
};
