import styled, { css } from "styled-components";

export const CardStyles = styled.div`
  background: var(--white);
  border: 1px solid var(--gray-1);
  overflow: hidden;
  transition: var(--transition);
  width: 528px;
  height: 654px;

  &:hover {
    border-color: var(--hard-primary);
    box-shadow: 0 0 16px 0px rgba(var(--hard-primary-rgb), 0.3);

    h4 {
      color: var(--primary);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 448px;
  /* object-fit: contain; */
  padding: ${(props) => (props.variant === "small" ? "1px" : "5px")};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  .tags-container {
    position: absolute;
    top: 25px;
    left: 25px;
    z-index: 2;
    display: flex;
    gap: 8px;
  }
`;

export const ActionSection = styled.div`
  position: absolute;
  bottom: 16px;
  left: 24px;
  right: 24px;
  display: flex;
  gap: 8px;
  align-items: center;
  font: var(--body-small-600);

  button {
    background-color: var(--gray-half);
    color: var(--gray-9);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
    font-size: 20px;
    transition: var(--transition);
    border-radius: 999px;
    padding-block: 14px;

    &:hover {
      background: var(--primary);
      color: var(--white);
    }
  }

  .cart-button {
    flex: auto;
    span {
      font: var(--body-small-600);
    }
  }

  .icon-button {
    width: 46px;
    height: 46px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-block-start: 12px;
  gap: 4px;
  /* flex: auto; */

  h4 {
    font: var(--body-large-400);
    color: var(--gray-7);
  }
`;

// export const CartButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: var(--gray-half);
//   color: var(--gray-9);
//   border: none;
//   cursor: pointer;
//   transition: var(--transition);
//   font-size: 20px;

//   &:hover {
//     background: var(--primary);
//     color: var(--white);
//   }
// `;

export const HurryUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  padding-block: 18px 24px;
  /* background-color: var(--primary); */
  /* color: var(--white); */
  font-size: 16px;
  font-weight: 600;
`;
