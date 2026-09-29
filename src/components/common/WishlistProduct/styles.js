import styled, { css } from "styled-components";

export const WishlistProductStyles = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: 42% 26.4% 16.3% 15.3%;
  align-items: center;
  width: 100%;
`;

// 0: 0%
// 535: 42%
// 871: 68.4%
// 1078: 84.7%

// total: 1272

export const ProductCell = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;

  span {
    font: var(--body-medium-400);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;
