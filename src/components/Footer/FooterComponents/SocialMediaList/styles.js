import styled, { css } from "styled-components";

export const SocialMediaListStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--primary);
      color: var(--white);
    }

    ${(props) => {
      switch (props.variant) {
        case "v2":
        case "v3":
        case "v4":
          return css`
            color: var(--gray-3);
          `;

        case "v5":
          return css`
            color: var(--green-gray-3);
          `;

        case "v1":
        default:
          return css`
            color: var(--gray-7);
          `;
      }
    }}
  }
`;
