import styled, { css } from "styled-components";

const variantStyles = {
  large: css`
    width: 312px;
    /* height: 407px; */
    border-radius: 8px;
  `,
  "medium-sharp": css`
    width: 264px;
    height: 327px;
    border-radius: 0px;
  `,
  small: css`
    width: 248px;
    /* height: 339px; */
    border-radius: 8px;
  `,
};

export const CardStyles = styled.div`
  background: var(--white);
  border: 1px solid var(--gray-1);
  overflow: hidden;
  transition: var(--transition);
  ${(props) => variantStyles[props.variant] || variantStyles.large}

  &:hover {
    border-color: var(--hard-primary);
    box-shadow: 0 0 16px 0px rgba(var(--hard-primary-rgb), 0.3);

    h4 {
      color: var(--primary);
    }

    .hover-actions {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  height: ${(props) => {
    switch (props.variant) {
      case "small":
        return "248px";
      case "medium-sharp":
        return "240px";
      case "large":
      default:
        return "312px";
    }
  }};
  padding: ${(props) => (props.variant === "small" ? "1px" : "5px")};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .tags-container {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 2;
    display: flex;
    gap: 8px;
  }
`;

/* hover effect للقلب والعين */
export const HoverActions = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  transform: translateX(10px);
  transition: var(--transition);
  z-index: 2;

  button {
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--white);
    border: 1px solid var(--gray-1);
    cursor: pointer;
    font-size: 20px;

    &:hover {
      background: var(--primary);
      color: var(--white);
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => {
    switch (props.variant) {
      case "small":
        return "91px";
      case "medium-sharp":
        return "87px";
      case "large":
      default:
        return "95px";
    }
  }};
  padding: ${(props) => {
    switch (props.variant) {
      case "small":
        return "12px 16px 16px 16px";
      case "medium-sharp":
        return "12px";
      case "large":
      default:
        return "16px";
    }
  }};

  h4 {
    font: var(--body-small-400);
    color: var(--gray-7);
    /* margin-bottom: 4px; */
  }

  /* .rating-container {
    margin-top: 6px;
  } */

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gray-half);
  color: var(--gray-9);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  font-size: 20px;

  &:hover {
    background: var(--primary);
    color: var(--white);
  }
`;
