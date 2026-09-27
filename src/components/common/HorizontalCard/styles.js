import styled from "styled-components";

export const HorizontalCardContainer = styled.div`
  border: 1px solid var(--gray-1);
  border-radius: var(--radius);
  display: flex;
  width: 424px;
  transition: var(--transition);

  &:hover {
    border-color: var(--hard-primary);
    box-shadow: 0 0 16px 0px rgba(var(--hard-primary-rgb), 0.3);

    h4 {
      color: var(--primary);
    }

    .default-info {
      opacity: 0;
      visibility: hidden;
    }

    .hover-actions {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

export const ImageBox = styled.div`
  padding: 5px;
  width: 112px;
  aspect-ratio: 1 / 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ContentBox = styled.div`
  padding: 24px 12px 25px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  position: relative;

  h4 {
    font: var(--body-small-400);
    color: var(--gray-7);
    margin: 0;
  }

  .default-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    transition: var(--transition);
  }
`;

export const HoverActions = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 24px;
  left: 12px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: var(--transition);
`;

export const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--gray-1);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--gray-7);
  transition: var(--transition);
  font-size: 18px;

  &:hover {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--white);
  }
`;
