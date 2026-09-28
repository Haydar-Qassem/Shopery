import styled from "styled-components";

export const CardContainer = styled.div`
  background: var(--white);
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition);

  &:hover {
    box-shadow: 0px 0px 50px rgba(from var(--gray-9) r g b / 0.08);
    border-color: transparent;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(from var(--gray-9) r g b / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  opacity: 0;
  transition: var(--transition);
  z-index: 10;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 39 / 35;
  overflow: hidden;

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background: transparent;
  font-size: 18px;
  transition: var(--transition);
  text-decoration: none;

  &:hover {
    background: var(--primary);
  }
`;

export const CardFooter = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.h4`
  font: var(--body-large-500);
  color: var(--gray-9);
  margin: 0;
`;

export const Role = styled.span`
  font: var(--body-small-400);
  color: var(--gray-5);
`;
