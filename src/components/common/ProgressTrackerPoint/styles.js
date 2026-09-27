import styled, { css } from "styled-components";

export const ProgressTrackerPointStyles = styled.span`
  margin-inline-start: 20px;
  margin-block-start: 20px;
  max-width: 40px;
  aspect-ratio: 1/1;
  border-radius: 999px;

  ${(props) => {
    switch (props.variant) {
      case "ongoing":
        return css`
          background-color: var(--primary);
          color: var(--white);
        `;

      case "done":
        return css`
          background-color: var(--primary);
          color: var(--white);
        `;

      default:
        return css`
          background-color: transparent;
          border: 1px dashed var(--primary);
          color: var(--primary);
          box-shadow: var(--gray-half);
        `;
    }
  }}
`;
