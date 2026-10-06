import styled from "styled-components";

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* width: 100%; */
  width: fit-content;
  flex-wrap: wrap;

  grid-column: span ${(props) => props.$span || 1};
`;

export const FormFieldLabel = styled.label`
  font: var(--body-small-400);

  span {
    color: var(--gray-5);
  }
`;

export const FormFieldControl = styled.div`
  position: relative;
`;

export const FormFieldError = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;

  margin-top: 2px;

  font-size: 12px;
  line-height: 16px;
  color: #ef4444;
`;

export const FormFieldWarning = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;

  margin-top: 2px;

  font-size: 12px;
  line-height: 16px;
  color: #f59e0b;
`;

export const FormStatusIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 14px;
  height: 14px;

  flex-shrink: 0;

  font-size: 11px;
  font-weight: 700;
`;
