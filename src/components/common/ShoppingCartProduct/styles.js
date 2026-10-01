import styled, { css } from "styled-components";

export const ShoppingCartProductStyles = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: 46% 13.7% 22.3% 15.1% 2.9%;
  align-items: center;
  width: 100%;
`;


// 0: 0%
// 383: 46%
// 497: 59.7%
// 683: 82%
// 808: 97.1%

// Total: 832



export const ProductCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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