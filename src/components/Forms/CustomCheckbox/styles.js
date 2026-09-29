import styled from "styled-components";

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  cursor: pointer;
  height: 21px;
`;

export const CheckboxControl = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid var(--gray-2);
  border-radius: 2px;

  &:checked {
    background-color: var(--primary);
    border-color: var(--primary);

    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* this is for keyboard navigation */
  &:focus-visible {
    outline: 2px solid var(--primary, #00b207);
    outline-offset: 2px;
  }

  /* margin: 0; */
  cursor: pointer;
  accent-color: var(--primary);
  border-color: var(--gray-2);
  /* color: var(--white); */
`;

export const CheckboxLabel = styled.span`
  font: var(--body-small-400);
  color: var(--gray-7);
`;
