import styled from "styled-components";

export const ListCardStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    border-color: var(--color-green-900);
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0; /* Prevents the image from squishing */
  padding: 8px;
  background: var(--gray-50);
  border-radius: 4px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    font: var(--body-small-400);
    color: var(--gray-800);
  }
`;