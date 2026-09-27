import styled from "styled-components";

export const RatingStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .stars {
    display: flex;
    gap: 2px;
    font-size: 14px;
    color: var(--warning-color, #ff8a00);
  }

  .review-count {
    font: var(--body-tiny-400);
    color: var(--gray-5);
    margin-left: 4px;
  }
`;
