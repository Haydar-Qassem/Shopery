import styled, { css } from "styled-components";

export const IconsPartStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-inline-end: ${(props) => (props.variant === "box-layout" ? "24px" : "")};
`;
