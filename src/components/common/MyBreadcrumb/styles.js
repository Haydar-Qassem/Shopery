import styled from "styled-components";
import { Link } from "react-router-dom";

export const BreadcrumbWrapper = styled.div`
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 120px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BreadcrumbContainer = styled.div`
  color: var(--gray-5);
  display: flex;
  align-items: center;
  gap: 12px;
  font: var(--body-medium-400);
`;

// I figured out a way to style Link component

export const StyledLink = styled(Link)`
  color: var(--gray-5);
  text-decoration: none;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  transition: var(transition);

  &:hover {
    transition: var(transition);
    color: var(--primary);
  }
`;

export const ActiveSpan = styled.span`
  color: var(--primary);
  text-transform: capitalize;
`;
