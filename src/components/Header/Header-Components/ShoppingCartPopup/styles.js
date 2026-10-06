import { motion } from "framer-motion";
import styled, { css } from "styled-components";

// export const ShoppingCartPopupStyles = styled.div``;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(from var(--gray-9) r g b / 0.5);
  z-index: 998;
`;

export const Drawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  max-width: 100vw;
  height: 100vh;
  background-color: var(--white);
  z-index: 999;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 15px rgba(from var(--gray-9) r g b / 0.1);
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid var(--gray-2);

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--gray-5);
  }
`;

export const CartItems = styled.div`
  flex: 1;
  overflow-y: auto; // for scrolling iza el items kano ktar
  padding: 24px;

  .cart-item {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;

    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }

    div {
      flex: 1;
      p {
        margin: 0 0 4px 0;
        font-weight: 500;
      }
      span {
        color: var(--gray-5);
        font-size: 14px;
      }
    }
  }
`;

export const CartFooter = styled.div`
  padding: 24px;
  border-top: 1px solid var(--gray-2);

  .total-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 16px;

    strong {
      font-size: 18px;
    }
  }

  button {
    width: 100%;
  }
  button:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 43px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 12px;
`;

export const GoToCartButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: transparent;
  color: var(--primary);
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
