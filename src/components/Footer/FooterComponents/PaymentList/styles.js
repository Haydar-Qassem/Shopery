import styled, { css } from "styled-components";

export const PaymentListStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${(props) => {
    switch (props.$variant) {
      case "v2":
        return css`
          --border-color: #d9d9d9;
          color: var(--gray-9);
        `;

      case "v5":
        return css`
          --border-color: var(--green-gray-8);
          color: var(--white);
        `;

      case "v1":
      case "v3":
      case "v4":
      default:
        return css`
          --border-color: var(--gray-8);
          color: var(--white);
        `;
    }
  }}

  .icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 32px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-size: 24px;
  }

  .secure-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 65px; */
    /* height: 32px; */
    border: 1px solid var(--border-color);
    border-radius: 5px;
    padding: 4px 8px;
  }

  .secure-box > span:first-child {
    display: flex;
    align-items: center;
    gap: 3px;
    line-height: 1.2;
  }

  .secure-box > span:last-child {
    line-height: 1.1;
  }
`;
