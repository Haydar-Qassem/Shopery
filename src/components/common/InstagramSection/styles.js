import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: 60px;
  /* width: 100%; */
`;

export const Title = styled.h2`
  font: var(--heading-5-600);
  color: var(--gray-9);
  margin-bottom: 32px;
  text-align: center;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(from var(--green-gray-7) r g b / 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: var(--transition);
  z-index: 10;
`;

export const ImageWrapper = styled.a`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  /* i figured out a new way for selection (mle) */
  ${ImageWrapper}:hover & {
    transform: scale(1.05);
  }
`;

export const InstagramIcon = styled.div`
  color: #ffffff;
  font-size: 40px;
`;
